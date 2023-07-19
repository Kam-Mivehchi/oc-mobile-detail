"use client";
import Hero from '../components/hero'
import { Transition } from '@headlessui/react'
import { usePathname } from 'next/navigation'

export default function Home() {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <Transition as="main" className="max-w-[1280px] mx-auto transition-all duration-700"
      appear={true}
      show={true}
      enter="ease-in-out"
      enterFrom="translate-x-full opacity-0"
      enterTo="translate-x-0 opacity-100"
      leave="ease-in-out"
      leaveFrom="transform translate-x-0 opacity-100"
      leaveTo="transform -translate-x-full opacity-0">
      <Hero />
    </Transition>
  )
}
