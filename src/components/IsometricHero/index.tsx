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
      className="relative flex h-dvh min-h-0 w-full flex-col items-center justify-center overflow-hidden"
      style={{
        perspective: '1000px',
        backgroundColor: HERO_CONFIG.backgroundColor,
      }}
    >
      <CanvasBackground containerRef={containerRef} />
      <HeroStyles />

      <Header />

      <div className="pointer-events-none relative z-10 mt-10 flex w-full max-w-7xl flex-col items-center justify-center gap-12 px-6 md:mt-0 md:flex-row md:gap-16 md:px-8">
        <AnimatedText text={HERO_CONFIG.text} textShadow={textShadow} />
        <Tagline />
      </div>
    </div>
  )
}

export default IsometricHero
