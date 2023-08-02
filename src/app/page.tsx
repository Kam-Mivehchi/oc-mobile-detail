"use client";
import { Transition } from '@headlessui/react'
import { usePathname } from 'next/navigation'
import Hero from '../components/hero'
import Testimonials from '../components/testimonials'
import Marketing from '../components/marketing'
import Results from '../components/results'
export default function Home() {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <Transition as="main" className="max-w-[1280px] mx-auto transition-all duration-700 text-white flex flex-col gap-24"
      appear={true}
      show={true}
      enter="ease-in-out"
      enterFrom="translate-x-full opacity-0"
      enterTo="translate-x-0 opacity-100"
      leave="ease-in-out"
      leaveFrom="transform translate-x-0 opacity-100"
      leaveTo="transform -translate-x-full opacity-0">
      <Hero />
      <Marketing />
      <Testimonials />
      <Results />
    </Transition>

  )
}
