'use client';

import React from 'react'
import { Transition } from '@headlessui/react'
import { ICityData, cityData, tiers } from '../../content';
import Link from 'next/link';
import Image from 'next/image';

function ServiceAreas() {
   return (
      <Transition as="main" className="max-w-[1280px] mx-auto transition-all duration-700 text-white px-2 sm:px-6 lg:px-8 flex flex-col items-center gap-8 mt-8 text-center"
         appear={true}
         show={true}
         enter="ease-in-out"
         enterFrom="translate-x-full opacity-0"
         enterTo="translate-x-0 opacity-100"
         leave="ease-out"
         leaveFrom="translate-x-0 opacity-100"
         leaveTo="-translate-x-full opacity-0">
         <h2 className='text-4xl font-bold text-accent'>Areas we serve</h2>
         <p className="text-lg">We proudly offer our mobile detailing and car wash services throughout Orange County, CA. Whether you're in Irvine, Newport Beach, Costa Mesa, Lake Forest or any other city in Orange County, we've got you covered! </p>
         <h4 className="text-2xl font-bold">Click on a city to learn more!</h4>
         <div className="flex flex-col lg:flex-row gap-4 flex-wrap justify-center">

            {cityData.map((city) => {
               return (
                  <Link href={city.href} className={`rounded-xl w-full lg:w-72 h-16 hover:shadow-md hover:shadow-accent/50`} style={{ background: `url('${city.img}')`, backgroundPosition: city.position }}>
                     <div className="w-full h-full bg-black/30 flex items-center justify-center py-3 px-5 hover:bg-black/10 ">

                        <h3 className='text-2xl font-bold  text-center '>{city.name}</h3>
                     </div>
                     {/* <p className="">{city.description}</p> */}
                     {/* <Image src={city.img} alt={city.name} width={500} height={500} /> */}
                  </Link>
               )
            })}
         </div>
         {/* <h2 className='text-2xl font-bold'>Services</h2> */}


      </Transition>
   )
}

export default ServiceAreas