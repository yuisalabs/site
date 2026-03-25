import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: 'About | Yuisalabs',
  description: 'Learn about Yuisalabs.',
}

export default function AboutPage() {
  return (
    <div className="min-h-dvh bg-[#FEFCF8] px-6 py-24 text-neutral-800">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="mb-10 inline-block font-medium text-[#a855f7] underline-offset-4 hover:underline"
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
