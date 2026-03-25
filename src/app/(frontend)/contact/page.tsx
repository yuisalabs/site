import Link from 'next/link'
import React from 'react'

import { WhatsAppCard } from '@/components/WhatsAppModal'
import { PALETTE } from '@/theme/palette'

export const metadata = {
  title: 'Contact | Yuisalabs',
  description: 'Get in touch with Yuisalabs for collaborations and inquiries.',
}

export default function ContactPage() {
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
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <header className="mb-16">
          <h1
            className="mb-6 text-5xl font-bold tracking-tight md:text-7xl"
            style={{ fontFamily: "'Oswald', sans-serif", color: '#000' }}
          >
            GET IN <span style={{ color: PALETTE.lavender }}>TOUCH</span>
          </h1>
          <p className="max-w-xl text-xl text-neutral-600">
            Have an idea or a project in mind? We&apos;d love to hear from you. Let&apos;s build
            something impactful together.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Email Card */}
          <a
            href="mailto:hello@yuisalabs.com"
            className="group relative border-2 border-black p-10 transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#000]"
            style={{ backgroundColor: PALETTE.sand }}
          >
            <div className="mb-6 flex size-12 items-center justify-center border-2 border-black bg-white">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <h3
              className="mb-2 text-sm font-bold uppercase tracking-[0.2em]"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Email Us
            </h3>
            <p className="break-all text-xl font-bold">hello@yuisalabs.com</p>
            <div className="absolute bottom-6 right-6 opacity-0 transition-opacity group-hover:opacity-100">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </a>

          {/* WhatsApp Card — interactive client component */}
          <WhatsAppCard phone="6285134272240" />
        </div>

        <footer className="mt-24 border-t-2 border-black pt-8">
          <p
            className="text-sm font-bold uppercase tracking-widest"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            © {new Date().getFullYear()} YUISALABS. ALL RIGHTS RESERVED.
          </p>
        </footer>
      </div>
    </div>
  )
}
