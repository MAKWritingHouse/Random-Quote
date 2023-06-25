import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Random Quote || MAK Writing House || MAKSTYLE119',
  description: 'Get a random quote every time',
  keywords: 'Random Quote, MAK Writing House, MAKSTYLE119, nextJs, next.js, Inspired, Uplifted, random, quote, inspirational quotes',
  author: 'MAK Writing House',
  copyright: 'MAK Writing House',
  'page-topic': 'Random Quote - MAK Writing House',
  'page-type': 'Web App',
  audience: 'Everyone',
  'og:title': 'Random Quote || MAK Writing House || MAKSTYLE119',
  robots: 'index, follow'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
