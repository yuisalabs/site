import React from 'react'

import { ANIMATION, COLORS } from './constants'
import { calculateAnimationTiming } from './utils'

interface AnimatedTextProps {
  text: string
  textShadow: string
}

export function AnimatedText({ text, textShadow }: AnimatedTextProps) {
  const letters = text.split('')

  return (
    <div className="shrink-0">
      <div
        className="pointer-events-auto flex h-fit w-fit"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'skew(55deg, -30deg) rotateY(0deg)',
        }}
      >
        {letters.map((char, index) => {
          const { delay, duration } = calculateAnimationTiming(index)

          return (
            <AnimatedLetter
              key={`letter-${index}`}
              char={char}
              duration={duration}
              delay={delay}
              textShadow={textShadow}
            />
          )
        })}
      </div>
    </div>
  )
}

interface AnimatedLetterProps {
  char: string
  duration: number
  delay: number
  textShadow: string
}

function AnimatedLetter({ char, duration, delay, textShadow }: AnimatedLetterProps) {
  return (
    <div
      className="relative h-fit w-fit cursor-pointer p-1.5 transition-colors duration-300"
      style={
        {
          transformStyle: 'preserve-3d',
          color: COLORS.primary,
          WebkitTextStroke: `${ANIMATION.textStroke} ${COLORS.black}`,
          '--color1': COLORS.black,
          '--color2': '#FEFCF8',
        } as React.CSSProperties
      }
      onMouseEnter={(e) => {
        e.currentTarget.style.color = COLORS.primaryHover
        e.currentTarget.style.setProperty('--color1', COLORS.black)
        e.currentTarget.style.setProperty('--color2', '#FEFCF8')
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = COLORS.primary
        e.currentTarget.style.setProperty('--color1', COLORS.black)
        e.currentTarget.style.setProperty('--color2', '#FEFCF8')
      }}
    >
      {/* Shadow Outline Layer */}
      <span
        className="pointer-events-none absolute transition-all duration-300"
        style={{
          fontFamily: "'Lexend Mega', sans-serif",
          fontSize: ANIMATION.textFontSize,
          fontWeight: 800,
          textShadow,
          color: 'transparent',
          WebkitTextStroke: '0px transparent',
          animation: `popShadowAnim ${duration}s infinite`,
          animationDelay: `${delay}s`,
        }}
      >
        {char}
      </span>

      {/* Main Text */}
      <span
        className="relative block pointer-events-none transition-all duration-300"
        style={{
          fontFamily: "'Lexend Mega', sans-serif",
          fontSize: ANIMATION.textFontSize,
          fontWeight: 800,
          animation: `popText ${duration}s infinite`,
          animationDelay: `${delay}s`,
        }}
      >
        {char}
      </span>
    </div>
  )
}
