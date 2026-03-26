'use client'

import React, { useRef } from 'react'

import { HERO_CONFIG } from './constants'
import { AnimatedText } from './AnimatedText'
import { CanvasBackground } from './Canvas'
import { Header } from './Header'
import { HeroStyles } from './Styles'
import { Tagline } from './Tagline'
import { generateTextShadow } from './utils'

export function IsometricHero() {
  const containerRef = useRef<HTMLDivElement>(null)!
  const textShadow = generateTextShadow()

  return (
    <div
      ref={containerRef}
      className="relative flex h-dvh min-h-0 w-full flex-col overflow-hidden"
      style={{
        perspective: '1000px',
        backgroundColor: HERO_CONFIG.backgroundColor,
      }}
    >
      <CanvasBackground containerRef={containerRef} />
      <HeroStyles />

      <Header />

      {/*
       * Mobile  (< lg): flex-col. Text fills the upper space, tagline
       *   snaps to the bottom with mt-auto.
       * Desktop (≥ lg): flex-row. Text area is flex-1 (left), tagline is
       *   a fixed-width column (right); both are vertically centred.
       */}
      <div className="pointer-events-none relative z-10 flex flex-1 w-full flex-col px-4 pt-24 pb-[max(1rem,env(safe-area-inset-bottom))] lg:flex-row lg:items-center lg:justify-between lg:px-16 lg:pt-0 lg:pb-8">
        {/* Text zone — centred on both axes; visually large due to skew */}
        <div className="flex flex-1 items-center justify-center">
          <div>
            <AnimatedText text={HERO_CONFIG.text} textShadow={textShadow} />
          </div>
        </div>

        {/* Tagline zone — bottom on mobile/tablet, fixed-width right column on desktop */}
        <div className="pointer-events-auto mt-auto w-full lg:mt-0 lg:w-[420px] lg:shrink-0">
          <Tagline />
        </div>
      </div>
    </div>
  )
}

export default IsometricHero
