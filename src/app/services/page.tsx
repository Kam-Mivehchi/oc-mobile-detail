'use client';
import React from 'react'
import { Transition } from '@headlessui/react'
import { usePathname } from 'next/navigation'
import Prices from '../../components/prices'

function About() {
   const pathname = usePathname();
   return (<Transition as="main" className="max-w-[1280px] mx-auto transition-all duration-700 text-white"
      appear={true}
      show={true}
      enter="ease-in-out"
      enterFrom="translate-x-full opacity-0"
      enterTo="translate-x-0 opacity-100"
      leave="ease-out"
      leaveFrom="translate-x-0 opacity-100"
      leaveTo="-translate-x-full opacity-0">
      Services
      <Prices /> 
   </Transition>
   )
}

export default About