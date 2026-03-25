'use client'

import React, { useEffect, useRef, useState } from 'react'

import { PALETTE } from '@/theme/palette'

const sans = "'Oswald', system-ui, sans-serif"

interface WhatsAppModalProps {
  phone: string
}

export function WhatsAppCard({ phone }: WhatsAppModalProps) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const dialogRef = useRef<HTMLDivElement>(null)
  const firstInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      firstInputRef.current?.focus()
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const greeting = name.trim() ? `Halo, nama saya *${name.trim()}*.\n\n` : ''
    const text = encodeURIComponent(`${greeting}${message.trim()}`)
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank', 'noopener,noreferrer')
    setOpen(false)
    setName('')
    setMessage('')
  }

  return (
    <>
      {/* WhatsApp Card */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative w-full cursor-pointer border-2 border-black p-10 text-left transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#000]"
        style={{ backgroundColor: PALETTE.lavender }}
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
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </div>
        <h3
          className="mb-2 text-sm font-bold uppercase tracking-[0.2em]"
          style={{ fontFamily: sans }}
        >
          WhatsApp
        </h3>
        <p className="text-xl font-bold">+62 851-3427-2240</p>
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
      </button>

      {/* Modal Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center"
          style={{ backgroundColor: 'rgba(0,0,0,0.55)' }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false)
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="wa-modal-title"
            className="w-full max-w-lg border-2 border-black shadow-[8px_8px_0_0_#000]"
            style={{ backgroundColor: PALETTE.cream }}
          >
            {/* Modal Header */}
            <div
              className="flex items-center justify-between border-b-2 border-black px-6 py-5"
              style={{ backgroundColor: PALETTE.lavender }}
            >
              <div className="flex items-center gap-3">
                <div className="flex size-8 items-center justify-center border-2 border-black bg-white">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <h2
                  id="wa-modal-title"
                  className="text-base font-bold uppercase tracking-[0.15em] text-black"
                  style={{ fontFamily: sans }}
                >
                  Send via WhatsApp
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close dialog"
                className="flex size-8 cursor-pointer items-center justify-center border-2 border-black bg-white transition-colors hover:bg-black hover:text-white"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="wa-name"
                  className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-600"
                  style={{ fontFamily: sans }}
                >
                  Your Name <span className="normal-case tracking-normal font-normal">(optional)</span>
                </label>
                <input
                  ref={firstInputRef}
                  id="wa-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rizky"
                  className="w-full border-2 border-black px-4 py-3 text-base outline-none transition-shadow focus:shadow-[4px_4px_0_0_#000]"
                  style={{ backgroundColor: PALETTE.sand, fontFamily: 'inherit' }}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="wa-message"
                  className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-600"
                  style={{ fontFamily: sans }}
                >
                  Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="wa-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  placeholder="Hi Yuisalabs, I'd like to talk about..."
                  className="w-full resize-none border-2 border-black px-4 py-3 text-base outline-none transition-shadow focus:shadow-[4px_4px_0_0_#000]"
                  style={{ backgroundColor: PALETTE.sand, fontFamily: 'inherit' }}
                />
              </div>

              {/* Preview */}
              {(name.trim() || message.trim()) && (
                <div className="border-2 border-dashed border-neutral-400 p-4">
                  <p
                    className="mb-2 text-xs font-bold uppercase tracking-widest text-neutral-500"
                    style={{ fontFamily: sans }}
                  >
                    Preview
                  </p>
                  <p className="whitespace-pre-wrap text-sm text-neutral-700">
                    {name.trim() ? `Halo, saya ${name.trim()}.\n\n` : ''}
                    {message.trim()}
                  </p>
                </div>
              )}

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex-1 cursor-pointer border-2 border-black px-6 py-3 text-sm font-bold uppercase tracking-widest transition-colors hover:bg-black hover:text-white"
                  style={{ fontFamily: sans }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex flex-1 cursor-pointer items-center justify-center gap-2 border-2 border-black px-6 py-3 text-sm font-bold uppercase tracking-widest transition-all hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_#000]"
                  style={{ fontFamily: sans, backgroundColor: PALETTE.lavender }}
                >
                  Open WhatsApp
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
