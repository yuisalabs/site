import Link from 'next/link'
import React from 'react'
import { PALETTE } from '@/theme/palette'

export const metadata = {
  title: 'About | Yuisalabs',
  description: 'Learn about Yuisalabs and our mission to build impactful digital solutions.',
}

export default function AboutPage() {
  return (
    <div
      className="min-h-dvh px-6 py-24 text-neutral-800"
      style={{ backgroundColor: PALETTE.cream }}
    >
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="mb-12 inline-flex items-center gap-2 font-medium transition-transform hover:-translate-x-1"
          style={{ color: PALETTE.lavender }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <header className="mb-16">
          <h1 
            className="mb-6 text-5xl font-bold tracking-tight md:text-7xl"
            style={{ fontFamily: "'Oswald', sans-serif", color: '#000' }}
          >
            ABOUT <span style={{ color: PALETTE.lavender }}>US</span>
          </h1>
          <div className="h-2 w-24 bg-black" />
        </header>

        <div className="space-y-12 text-lg leading-relaxed md:text-xl">
          <section>
            <p className="font-serif italic text-2xl md:text-3xl leading-snug text-black mb-8">
              "Yuisalabs is a tech organization focused on idea exploration, digital product development, and innovative research."
            </p>
            <p className="text-neutral-700">
              We believe that the best solutions are born from a perfect marriage of curiosity and technical excellence. 
              Our team combines creativity and technology to build relevant and impactful solutions for the future, 
              transforming complex challenges into seamless digital experiences.
            </p>
          </section>

          <section className="grid gap-8 md:grid-cols-2">
            <div className="border-2 border-black p-8 shadow-[4px_4px_0_0_#000]" style={{ backgroundColor: PALETTE.sand }}>
              <h3 className="mb-4 text-xl font-bold uppercase tracking-wider" style={{ fontFamily: "'Oswald', sans-serif" }}>Exploration</h3>
              <p className="text-base text-neutral-800">
                We dive deep into research and experimentation, pushing the boundaries of what's possible in the digital landscape.
              </p>
            </div>
            <div className="border-2 border-black p-8 shadow-[4px_4px_0_0_#000]" style={{ backgroundColor: PALETTE.lavender }}>
              <h3 className="mb-4 text-xl font-bold uppercase tracking-wider text-black" style={{ fontFamily: "'Oswald', sans-serif" }}>Innovation</h3>
              <p className="text-base text-black">
                Our focus is on creating products that don't just work, but make a lasting impact on how people interact with technology.
              </p>
            </div>
          </section>

          <section className="pt-8">
            <h2 className="mb-6 text-3xl font-bold" style={{ fontFamily: "'Oswald', sans-serif" }}>OUR VISION</h2>
            <p className="text-neutral-700">
              To be the catalyst for digital transformation, where every idea has the potential to become a 
              meaningful reality. We are committed to building a future where technology serves humanity 
              with purpose, elegance, and integrity.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
