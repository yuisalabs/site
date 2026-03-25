import { PALETTE } from '@/theme/palette'

export const HERO_CONFIG = {
  text: 'YUISALABS',
  tagline: 'Experimenting Ideas, Creating Impact.',
  backgroundColor: PALETTE.cream,
}

/** Dual-panel tagline — uses full palette */
export const TAGLINE_PANELS = {
  /** Diamond junction accent */
  accent: PALETTE.taupe,
  slabTop: PALETTE.cream,
  leftBg: PALETTE.sand,
  rightBg: PALETTE.lavender,
  vennFill: PALETTE.sand,
  left: {
    label: '- Yuisalabs',
    headline: 'We experiment with ideas, research, and design that create lasting impact.',
  },
  right: {
    headline: 'We offer end-to-end creative and product thinking.',
    subtext:
      'We give your brand a clear personality and presence—true to its purpose and voice.',
  },
} as const

export const COLORS = {
  primary: PALETTE.lavender,
  /** Slightly lighter lavender for hover */
  primaryHover: '#b9a3c0',
  black: '#000000',
  white: '#FFFFFF',
  grid: PALETTE.sand,
  text: '#5c5349',
  cream: PALETTE.cream,
  sand: PALETTE.sand,
  taupe: PALETTE.taupe,
}

export const CANVAS = {
  rectSize: 45,
  angle: 30,
  rippleRadiusIncrement: 25,
  rippleMaxRadiusMultiplier: 1.5,
  mouseInfluenceRadius: 2.5,
  mouseInfluenceOpacity: 0.5,
  rippleInfluenceRadius: 1.5,
  rippleMaxOpacity: 0.4,
}

export const ANIMATION = {
  textFontSize: 'clamp(48px, 10vw, 120px)',
  textFontFamily: "'Archivo Black', sans-serif",
  fillStroke: 3,
  gridStroke: 1,
  baseStroke: 2,
}

export const TEXT_SHADOW = {
  depth: 0.16,
  color1Start: 0.001,
  color1End: 0.11,
  color2Start: 0.11,
  color2End: 0.14,
  step: 0.001,
}

export const ANIMATION_TIMING = {
  delayMultiplier: 0.73,
  durationBase: 2,
  durationVariation: 1.5,
  durationMultiplier: 0.3,
}

export const HEADER = {
  gap: {
    sm: 'gap-2',
    lg: 'lg:gap-4',
  },
  padding: {
    x: 'px-6',
    lg: 'lg:px-10',
  },
}
