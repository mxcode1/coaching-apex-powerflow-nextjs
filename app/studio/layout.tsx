import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PowerFlow CMS Studio',
  description: 'Content Management System for PowerFlow',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Suppress hydration warnings from Sanity Studio
  return (
    <div suppressHydrationWarning>
      {children}
    </div>
  )
}
