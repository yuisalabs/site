import React, { useEffect, useRef } from 'react'

import { ANIMATION, CANVAS, COLORS } from './constants'
import {
  GridBounds,
  GridCoords,
  Ripple,
  calculateGridBounds,
  createRipple,
  toGridCoords,
  updateRipples,
} from './utils'

export interface CanvasProps {
  containerRef: React.RefObject<HTMLDivElement | null>
}

export function CanvasBackground({ containerRef }: CanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current

    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    setupCanvas(canvas, container, ctx)
  }, [containerRef])

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full" />
}

function setupCanvas(
  canvas: HTMLCanvasElement,
  container: HTMLDivElement,
  ctx: CanvasRenderingContext2D,
) {
  let animationFrameId: number
  let width = container.clientWidth
  let height = container.clientHeight

  const dpr = window.devicePixelRatio || 1
  canvas.width = width * dpr
  canvas.height = height * dpr
  ctx.scale(dpr, dpr)

  const angle = (CANVAS.angle * Math.PI) / 180
  const cos30 = Math.cos(angle)
  const sin30 = Math.sin(angle)

  let mouseX = -1000
  let mouseY = -1000
  const ripples: Ripple[] = []

  function handleMouseMove(e: MouseEvent) {
    const rect = container.getBoundingClientRect()
    mouseX = e.clientX - rect.left
    mouseY = e.clientY - rect.top
  }

  function handleMouseLeave() {
    mouseX = -1000
    mouseY = -1000
  }

  function handleClick(e: MouseEvent) {
    const rect = container.getBoundingClientRect()
    ripples.push(createRipple(e.clientX - rect.left, e.clientY - rect.top))
  }

  function handleResize() {
    width = container.clientWidth
    height = container.clientHeight
    canvas.width = width * dpr
    canvas.height = height * dpr
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.scale(dpr, dpr)
  }

  window.addEventListener('resize', handleResize)
  container.addEventListener('mousemove', handleMouseMove)
  container.addEventListener('mouseleave', handleMouseLeave)
  container.addEventListener('click', handleClick)

  function draw() {
    clearCanvas(ctx, canvas)
    drawIsometricGrid(ctx, width, height, cos30, sin30, mouseX, mouseY, ripples)
    updateRipplesState(ripples, width, height)

    animationFrameId = requestAnimationFrame(draw)
  }

  draw()

  return () => {
    window.removeEventListener('resize', handleResize)
    container.removeEventListener('mousemove', handleMouseMove)
    container.removeEventListener('mouseleave', handleMouseLeave)
    container.removeEventListener('click', handleClick)
    cancelAnimationFrame(animationFrameId)
  }
}

function clearCanvas(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
  ctx.save()
  ctx.setTransform(1, 0, 0, 1, 0, 0)
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.restore()
}

function drawIsometricGrid(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  cos30: number,
  sin30: number,
  mouseX: number,
  mouseY: number,
  ripples: Ripple[],
) {
  ctx.save()
  ctx.translate(width / 2, height / 2)
  ctx.transform(cos30, sin30, -cos30, sin30, 0, 0)

  const bounds = getViewportBounds(width, height, cos30, sin30)
  const gridBounds = calculateGridBounds(bounds.tl, bounds.tr, bounds.bl, bounds.br, CANVAS.rectSize)

  ctx.lineWidth = ANIMATION.gridStroke

  for (let gridY = gridBounds.minY; gridY <= gridBounds.maxY; gridY++) {
    for (let gridX = gridBounds.minX; gridX <= gridBounds.maxX; gridX++) {
      drawCell(ctx, gridX, gridY, cos30, sin30, width, height, mouseX, mouseY, ripples)
    }
  }

  ctx.restore()
}

interface ViewportBounds {
  tl: GridCoords
  tr: GridCoords
  bl: GridCoords
  br: GridCoords
}

function getViewportBounds(
  width: number,
  height: number,
  cos30: number,
  sin30: number,
): ViewportBounds {
  const dxLeft = -width / 2
  const dxRight = width / 2
  const dyTop = -height / 2
  const dyBottom = height / 2

  return {
    tl: toGridCoords(dxLeft, dyTop, cos30, sin30),
    tr: toGridCoords(dxRight, dyTop, cos30, sin30),
    bl: toGridCoords(dxLeft, dyBottom, cos30, sin30),
    br: toGridCoords(dxRight, dyBottom, cos30, sin30),
  }
}

function drawCell(
  ctx: CanvasRenderingContext2D,
  gridX: number,
  gridY: number,
  cos30: number,
  sin30: number,
  width: number,
  height: number,
  mouseX: number,
  mouseY: number,
  ripples: Ripple[],
) {
  const rectX = gridX * CANVAS.rectSize
  const rectY = gridY * CANVAS.rectSize

  const centerX = rectX + CANVAS.rectSize / 2
  const centerY = rectY + CANVAS.rectSize / 2

  const dx = centerX * cos30 - centerY * cos30
  const dy = centerX * sin30 + centerY * sin30
  const screenX = dx + width / 2
  const screenY = dy + height / 2

  const distToMouse = Math.hypot(screenX - mouseX, screenY - mouseY)

  let fillOpacity = 0
  let scale = 1

  // Calculate ripple effects
  for (const ripple of ripples) {
    const distToClick = Math.hypot(screenX - ripple.x, screenY - ripple.y)
    if (Math.abs(distToClick - ripple.radius) < CANVAS.rectSize * CANVAS.rippleInfluenceRadius) {
      const pulse = Math.max(
        0,
        CANVAS.rippleMaxOpacity -
          (Math.abs(distToClick - ripple.radius) / (CANVAS.rectSize * CANVAS.rippleInfluenceRadius)) *
            CANVAS.rippleMaxOpacity,
      )
      fillOpacity = Math.max(fillOpacity, pulse)
      scale = Math.min(scale, 1 - pulse * 0.2)
    }
  }

  // Calculate mouse hover effect
  if (distToMouse < CANVAS.rectSize * CANVAS.mouseInfluenceRadius) {
    const mouseOpacity = CANVAS.mouseInfluenceOpacity - (distToMouse / (CANVAS.rectSize * CANVAS.mouseInfluenceRadius)) * CANVAS.mouseInfluenceOpacity
    fillOpacity = Math.max(fillOpacity, mouseOpacity)
    scale = Math.min(scale, 1 - mouseOpacity * 0.3)
  }

  const drawSize = CANVAS.rectSize * scale
  const offset = (CANVAS.rectSize - drawSize) / 2

  // Draw active cell (with fill and stroke)
  if (fillOpacity > 0) {
    ctx.fillStyle = `rgba(168, 85, 247, ${fillOpacity})`
    ctx.fillRect(rectX + offset, rectY + offset, drawSize, drawSize)
    ctx.strokeStyle = `rgba(0, 0, 0, ${fillOpacity})`
    ctx.lineWidth = ANIMATION.fillStroke
    ctx.strokeRect(rectX + offset, rectY + offset, drawSize, drawSize)
    ctx.lineWidth = ANIMATION.baseStroke
  }

  // Draw grid
  ctx.strokeStyle = COLORS.grid
  ctx.strokeRect(rectX, rectY, CANVAS.rectSize, CANVAS.rectSize)
}

function updateRipplesState(ripples: Ripple[], width: number, height: number) {
  const maxRadius = Math.max(width, height) * CANVAS.rippleMaxRadiusMultiplier
  ripples.splice(
    0,
    ripples.length,
    ...updateRipples(ripples, CANVAS.rippleRadiusIncrement, maxRadius),
  )
}
