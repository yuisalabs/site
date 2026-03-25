import { TEXT_SHADOW } from './constants'

export function generateTextShadow(): string {
  const shadowParts: string[] = []

  for (let i = TEXT_SHADOW.color1Start; i <= TEXT_SHADOW.depth; i += TEXT_SHADOW.step) {
    let color = 'var(--color1)'

    if (i > TEXT_SHADOW.color2Start && i <= TEXT_SHADOW.color2End) {
      color = 'var(--color2)'
    }

    shadowParts.push(`-${i.toFixed(3)}em ${i.toFixed(3)}em 0px ${color}`)
  }

  return shadowParts.join(', ')
}

export function calculateAnimationTiming(index: number): {
  delay: number
  duration: number
} {
  const { delayMultiplier, durationBase, durationMultiplier, durationVariation } =
    require('./constants').ANIMATION_TIMING

  return {
    delay: (index * delayMultiplier) % 2,
    duration: durationBase + ((index * durationMultiplier) % durationVariation),
  }
}

export interface GridCoords {
  x: number
  y: number
}

export function toGridCoords(dx: number, dy: number, cos30: number, sin30: number): GridCoords {
  return {
    x: 0.5 * (dx / cos30 + dy / sin30),
    y: 0.5 * (dy / sin30 - dx / cos30),
  }
}

export interface Ripple {
  x: number
  y: number
  radius: number
}

export function createRipple(x: number, y: number): Ripple {
  return { x, y, radius: 0 }
}

export function updateRipples(
  ripples: Ripple[],
  increment: number,
  maxRadius: number,
): Ripple[] {
  for (const ripple of ripples) {
    ripple.radius += increment
  }
  return ripples.filter((r) => r.radius <= maxRadius)
}

export interface GridBounds {
  minX: number
  maxX: number
  minY: number
  maxY: number
}

export function calculateGridBounds(
  tl: GridCoords,
  tr: GridCoords,
  bl: GridCoords,
  br: GridCoords,
  rectSize: number,
): GridBounds {
  const coords = [tl.x, tr.x, bl.x, br.x, tl.y, tr.y, bl.y, br.y]
  const minX = Math.min(tl.x, tr.x, bl.x, br.x)
  const maxX = Math.max(tl.x, tr.x, bl.x, br.x)
  const minY = Math.min(tl.y, tr.y, bl.y, br.y)
  const maxY = Math.max(tl.y, tr.y, bl.y, br.y)

  return {
    minX: Math.floor(minX / rectSize) - 2,
    maxX: Math.ceil(maxX / rectSize) + 2,
    minY: Math.floor(minY / rectSize) - 2,
    maxY: Math.ceil(maxY / rectSize) + 2,
  }
}
