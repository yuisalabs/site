import Link from 'next/link'
import React from 'react'

import { PALETTE } from '@/theme/palette'

export const metadata = {
  title: 'Contact | Yuisalabs',
  description: 'Get in touch with Yuisalabs.',
}

export default function ContactPage() {
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
        <h1 className="mb-4 font-serif text-4xl font-bold tracking-tight md:text-5xl">Contact</h1>
        <p className="mb-6 text-lg leading-relaxed text-neutral-600">
          Add your email, form, or social links here. This route is wired from the home header and
          &quot;Start Project&quot; CTA.
        </p>
      </div>
    </div>
  )
}
