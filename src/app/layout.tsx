import './globals.css'
import type { Metadata } from 'next'
import Navbar from "../components/navbar"
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
      <body className='bg-gradient-to-b from-black via-primary to-accent/40 min-h-screen'>
        <header className=' max-w-[1280px] mx-auto'>

          <Navbar />
        </header>
        {children}
      </body>
    </html>
  )
}
