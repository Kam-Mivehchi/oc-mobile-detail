import './globals.css'
import type { Metadata } from 'next'
import Navbar from "../components/navbar"
import Footer from "../components/footer"
export const metadata: Metadata = {
  title: 'Mobile Detailing & Car Wash Services in Orange County, CA | OC Mobile Detailing',
  description: "OC Mobile Detailing offers top-quality mobile detailing and car wash services in Orange County, CA. Our expert team will bring the shine to your vehicle at your doorstep. Book now!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-gradient-to-b from-[#121212] via-primary to-accent/50 min-h-screen'>
        <header className=' max-w-[1280px] mx-auto'>

          <Navbar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  )
}
