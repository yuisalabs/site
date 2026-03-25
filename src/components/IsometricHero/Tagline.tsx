import React from 'react'

import { COLORS, HERO_CONFIG } from './constants'

export function Tagline() {
  return (
    <div
      className="pointer-events-auto max-w-[300px] text-center text-[20px] md:max-w-[400px] md:text-left md:text-[28px]"
      style={{
        fontFamily: "'Lexend Mega', sans-serif",
        color: COLORS.text,
        lineHeight: '1.4',
      }}
    >
      {HERO_CONFIG.tagline}
    </div>
  )
}
