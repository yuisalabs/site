import Link from 'next/link'
import React from 'react'

import { COLORS, HEADER } from './constants'

export function Header() {
  return (
    <header
      className="pointer-events-auto absolute top-6 left-1/2 z-50 flex w-[calc(100%-3rem)] max-w-7xl -translate-x-1/2 items-stretch justify-between gap-2 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:w-[calc(100%-6rem)]"
      style={{ backgroundColor: COLORS.cream }}
    >
      <style>{`
        .yuisa-header-nav a:hover { color: ${COLORS.primary}; }
      `}</style>
      <nav
        className={`yuisa-header-nav flex min-w-0 flex-1 items-center ${HEADER.gap.sm} px-3 py-3 text-sm font-bold sm:px-6 sm:text-base ${HEADER.gap.lg} lg:px-10 lg:text-2xl`}
        style={{ fontFamily: "'Oswald', sans-serif", color: COLORS.text }}
      >
        <Link href="/about" className="whitespace-nowrap transition-colors">
          About Us
        </Link>
        <Link href="/contact" className="whitespace-nowrap transition-colors">
          Contact
        </Link>
      </nav>

      <Link
        href="/contact"
        className={`group flex shrink-0 cursor-pointer items-center justify-center gap-1.5 border-l-2 border-black px-3 py-3 transition-colors sm:gap-2 sm:px-6 sm:py-4 ${HEADER.padding.lg}`}
        style={{
          fontFamily: "'Oswald', sans-serif",
          backgroundColor: COLORS.primary,
        }}
        onMouseEnter={(e) => {
          ;(e.currentTarget as HTMLElement).style.backgroundColor = COLORS.primaryHover
        }}
        onMouseLeave={(e) => {
          ;(e.currentTarget as HTMLElement).style.backgroundColor = COLORS.primary
        }}
      >
        <span className="text-sm font-semibold whitespace-nowrap text-black sm:text-xl">
          Book a Call
        </span>
        <svg
          className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke={COLORS.black}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </Link>
    </header>
  )
}
