import React from 'react'

import { HERO_CONFIG, TAGLINE_PANELS } from './constants'

const serif = "'Cormorant Garamond', Georgia, serif"
const sans = "'Oswald', system-ui, sans-serif"

function SlabTop({ color }: { color: string }) {
  return (
    <div
      className="h-3 w-full shrink-0 border-b-2 border-black"
      style={{ backgroundColor: color }}
      aria-hidden
    />
  )
}

function DiamondMark({ className }: { className?: string }) {
  return (
    <div
      className={`size-4 rotate-45 border-2 border-black ${className ?? ''}`}
      style={{ backgroundColor: TAGLINE_PANELS.accent }}
      aria-hidden
    />
  )
}

function VennGraphic() {
  const { vennFill } = TAGLINE_PANELS
  const stroke = HERO_CONFIG.backgroundColor
  return (
    <div className="flex shrink-0 items-center justify-center" aria-hidden>
      <svg width="72" height="48" viewBox="0 0 72 48">
        <circle cx="28" cy="24" r="18" fill="none" stroke={stroke} strokeWidth="1.5" />
        <circle
          cx="44"
          cy="24"
          r="18"
          fill={vennFill}
          stroke="black"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  )
}

function ArrowUpRight() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  )
}

export function Tagline() {
  const { left, right, slabTop, leftBg, rightBg } = TAGLINE_PANELS

  return (
    <div className="w-full">
      <div className="relative flex flex-col border-2 border-black shadow-[6px_6px_0_0_#000] md:flex-row">
        <div className="relative flex min-w-0 flex-1 flex-col border-b-2 border-black md:border-r-2 md:border-b-0">
          <SlabTop color={slabTop} />
          <div
            className="flex min-h-44 flex-1 flex-col justify-between gap-8 p-8 md:min-h-48 md:p-10"
            style={{ backgroundColor: leftBg }}
          >
            <p
              className="text-[1.25rem] leading-snug font-semibold text-black sm:text-[1.35rem] md:text-[1.5rem] md:leading-tight lg:text-[1.65rem]"
              style={{ fontFamily: serif }}
            >
              {left.headline}
            </p>
            <div className="flex items-end justify-between gap-4 text-black">
              <span
                className="text-xs font-bold tracking-[0.2em] uppercase sm:text-sm"
                style={{ fontFamily: sans }}
              >
                {left.label}
              </span>
              <a href="/about"><ArrowUpRight /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
