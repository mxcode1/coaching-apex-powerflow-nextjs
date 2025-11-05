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
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Force dark mode colors for Sanity Studio */
          html, body {
            background-color: #101112 !important;
          }
          
          /* Main container backgrounds */
          [data-ui="Pane"],
          [data-ui="Card"],
          [data-scheme="light"] {
            background-color: #1a1d1e !important;
          }
          
          /* Text colors - ensure visibility */
          [data-ui="Text"],
          [data-ui="MenuItem"] span,
          [data-ui="Card"] span,
          [data-ui="Card"] div {
            color: #e1e3e4 !important;
          }
          
          /* Headings and labels */
          h1, h2, h3, h4, h5, h6,
          label {
            color: #fff !important;
          }
          
          /* Input fields */
          input,
          textarea,
          [contenteditable="true"] {
            background-color: #2a2d2e !important;
            color: #fff !important;
            border-color: #3a3d3e !important;
          }
          
          /* Selected/highlighted items */
          [data-selected="true"],
          [aria-selected="true"],
          [data-pressed="true"] {
            background-color: #5865f2 !important;
            color: #fff !important;
          }
          
          /* Buttons */
          button {
            background-color: #2a2d2e !important;
            color: #fff !important;
            border-color: #3a3d3e !important;
          }
          
          button[data-ui="Button"][data-tone="primary"] {
            background-color: #5865f2 !important;
            color: #fff !important;
          }
          
          /* Links */
          a {
            color: #00a6ed !important;
          }
          
          /* Dropdowns and menus */
          [data-ui="MenuButton"],
          [data-ui="Menu"] {
            background-color: #1a1d1e !important;
            color: #e1e3e4 !important;
          }
        `
      }} />
      <div suppressHydrationWarning>
        {children}
      </div>
    </>
  )
}
