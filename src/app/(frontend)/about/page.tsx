import Link from 'next/link'
import React from 'react'

import { PALETTE } from '@/theme/palette'

export const metadata = {
  title: 'About | Yuisalabs',
  description: 'Learn about Yuisalabs.',
}

export default function AboutPage() {
  return (
    <div
      className="min-h-dvh px-6 py-24 text-neutral-800"
      style={{ backgroundColor: PALETTE.cream }}
    >
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="mb-10 inline-block font-medium underline-offset-4 hover:underline"
          style={{ color: PALETTE.lavender }}
        >
          ← Home
        </Link>
        <h1 className="mb-4 font-serif text-4xl font-bold tracking-tight md:text-5xl">About</h1>
        <p className="text-lg leading-relaxed text-neutral-600">
          Replace this with your company story, team, and values. Content can later come from Payload
          collections or globals.
        </p>
      </div>
    </div>
  )
}
