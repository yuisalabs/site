import React from 'react'
import '@/styles/globals.css'

export const metadata = {
  description: 'Website profile company.',
  title: 'Yuisalabs',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
