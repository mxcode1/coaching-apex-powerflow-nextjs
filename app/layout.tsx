import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PowerFlowScripts } from '@/components/layout/PowerFlowScripts'
import './globals.css'

export const metadata: Metadata = {
  title: 'PowerFlow - Gym Fitness and Yoga',
  description: 'Transform your body and mind with world-class training, expert coaches, and modern equipment.',
  icons: {
    icon: '/images/icon.webp',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* PowerFlow CSS Files */}
        <link href="/css/bootstrap.min.css" rel="stylesheet" type="text/css" id="bootstrap" />
        <link href="/css/plugins.css" rel="stylesheet" type="text/css" />
        <link href="/css/style.css" rel="stylesheet" type="text/css" />
        <link href="/css/coloring.css" rel="stylesheet" type="text/css" />
        <link id="colors" href="/css/colors/scheme-01.css" rel="stylesheet" type="text/css" />
      </head>
      <body className="dark-scheme">
        <div id="wrapper">
          <Header />
          
          <main>
            {children}
          </main>
          
          <Footer />
          
          {/* Scroll to top */}
          <div className="float-text show-on-scroll">
            <span><a href="#">Scroll to top</a></span>
          </div>
          <div className="scrollbar-v show-on-scroll"></div>
        </div>

        {/* PowerFlow JavaScript - Now managed via client component */}
        <PowerFlowScripts />
      </body>
    </html>
  )
}
