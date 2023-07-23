'use client';

import React from 'react'
import { Transition } from '@headlessui/react'
import { ICityData, cityData, tiers } from '../../content';
import Link from 'next/link';
import Image from 'next/image';

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

         <h2 className='text-2xl font-bold'>Service Areas</h2>

         {cityData.map((city) => {
            return (
               <Link href={city.href}>
                  <h2>{city.name}</h2>
                  <p className="">{city.description}</p>
                  <Image src={city.img} alt={city.name} />
               </Link>
            )
         })}
         <h2 className='text-2xl font-bold'>Services</h2>
         {tiers.map((service) => {
            return (
               <Link href={service.href}>
                  <h2>{service.name}</h2>
                  <p className="">{service.description}</p>
                  {/* <Image src={service.img} alt={service.name} /> */}
                  <div className="flex gap-2 text-xs">

                     {service.features.map((feature) => {
                        return (
                           <p className="">{feature}</p>
                        )
                     })}
                  </div>
               </Link>
            )
         })}
      </Transition>
   )
}

export default ServiceAreas