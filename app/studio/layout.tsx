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
          
          /* ===== LOGIN PAGE SPECIFIC FIXES ===== */
          
          /* Login container and cards */
          [data-ui="LoginCard"],
          [data-ui="Card"][class*="login"],
          div[class*="login"] {
            background-color: #1a1d1e !important;
            color: #fff !important;
          }
          
          /* Login buttons - Google, GitHub, etc. */
          button[data-ui="Button"],
          button[type="button"],
          button[type="submit"] {
            background-color: #fff !important;
            color: #000 !important;
            border: 1px solid #3a3d3e !important;
            font-weight: 500 !important;
          }
          
          /* Ensure button text is always visible */
          button span,
          button div,
          button svg {
            color: #000 !important;
            fill: #000 !important;
          }
          
          /* Login heading */
          [data-ui="Heading"],
          h2[data-ui="Heading"] {
            color: #fff !important;
          }
          
          /* Login provider buttons hover state */
          button:hover {
            background-color: #f0f0f0 !important;
            opacity: 0.9 !important;
          }
          
          /* Login footer links */
          footer a,
          [class*="footer"] a {
            color: #00a6ed !important;
          }
          
          /* Ensure all text in login flow is visible */
          [data-ui="Dialog"] *,
          [data-ui="Popover"] *,
          [role="dialog"] * {
            color: inherit;
          }
          
          /* Override any light mode forcing */
          [data-scheme="light"] [data-ui="Text"],
          [data-scheme="light"] span,
          [data-scheme="light"] div {
            color: #fff !important;
          }
          
          [data-scheme="light"] button {
            background-color: #fff !important;
            color: #000 !important;
          }
          
          [data-scheme="light"] button span {
            color: #000 !important;
          }
        `
      }} />
      <div suppressHydrationWarning>
        {children}
      </div>
    </>
  )
}
