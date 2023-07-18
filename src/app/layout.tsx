import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'OC Mobile Detail',
  description: "OC's finest car detailing service",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-gradient-to-b from-black via-[#2e2e2e] to-[rgb(247,191,80,.4)] min-h-screen'>
        <header>
          <div className="logo"></div>
          <nav></nav>
        </header>
        {children}
      </body>
    </html>
  )
}
