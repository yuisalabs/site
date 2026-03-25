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
       * Mobile  (< md): flex-col. Text fills the upper space, tagline
       *   snaps to the bottom with mt-auto.
       * Desktop (≥ md): flex-row. Text area is flex-1 (left), tagline is
       *   a fixed-width column (right); both are vertically centred.
       */}
      <div className="pointer-events-none relative z-10 flex flex-1 w-full flex-col px-4 pt-24 pb-[max(1rem,env(safe-area-inset-bottom))] md:flex-row md:items-center md:px-12 md:pt-0 md:pb-8 md:gap-8 lg:gap-12 lg:px-16">
        {/* Text zone — centred on both axes; visually large due to skew */}
        <div className="flex flex-1 items-center justify-center">
          <AnimatedText text={HERO_CONFIG.text} textShadow={textShadow} />
        </div>

        {/* Tagline zone — bottom on mobile, fixed-width right column on desktop */}
        <div className="pointer-events-auto mt-auto w-full md:mt-0 md:w-[340px] md:shrink-0 lg:w-[400px]">
          <Tagline />
        </div>
      </div>
    </div>
  )
}

export default IsometricHero
