'use client';

import React from 'react'
import { Transition } from '@headlessui/react'
import { cityData } from '@/content';
import CityPage from '@/components/city-page';

function ServiceAreas() {
   return (
      <Transition as="main" className="max-w-[1280px] mx-auto transition-all duration-700 text-white px-2 sm:px-6 lg:px-8"
         appear={true}
         show={true}
         enter="ease-in-out"
         enterFrom="translate-x-full opacity-0"
         enterTo="translate-x-0 opacity-100"
         leave="ease-out"
         leaveFrom="translate-x-0 opacity-100"
         leaveTo="-translate-x-full opacity-0">
         <CityPage data={cityData[4]} />

      </Transition>
   )
}

export default ServiceAreas