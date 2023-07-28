"use client";

import * as React from 'react'
import { Popover, Transition } from '@headlessui/react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cityData } from '../content'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { INavigation } from './navbar'
import Image from 'next/image'
function classNames(...classes: string[]) {
   return classes.filter(Boolean).join(' ')
}
function NavDropdownComponent({ data, setOpen, mobile }: { data: INavigation, setOpen: (value: boolean) => void, mobile: boolean }) {
   const pathname = usePathname()
   console.log(pathname.split('/')[1])
   return (

      <Popover className="relative ">
         <Popover.Button className={classNames(
            data.href === `/${pathname.split('/')[1]}` ? 'bg-black/70 text-white' : 'text-gray-300 hover:bg-white/50 hover:text-white',
            'rounded-full px-4 py-1 my-2 text-sm md:text-xs lg:text-sm font-medium transition-all duration-700 flex '
         )}
            aria-current={data.href === `/${pathname.split('/')[1]}` ? 'page' : undefined}>
            {data.name}
            <ChevronDownIcon className="h-5 w-5 f text-gray-400" aria-hidden="true" />
         </Popover.Button>

         <Transition
            as={React.Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
         >
            <Popover.Panel className="absolute md:right-0 top-full z-10 mt-3 w-full md:w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
               <div className="p-4">
                  {data.subpages!.map((item) => (
                     <div onClick={() => setOpen(false)}
                        key={item as unknown as string}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                     >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white relative overflow-hidden">

                           <Image src={item.img} fill alt={`${item.name} thumbnail`} />
                        </div>
                        <div className="flex-auto">
                           <Popover.Button as={Link} href={item.href} className="block font-semibold text-gray-900">
                              {item.name}
                              <span className="absolute inset-0" />
                           </Popover.Button >
                           <p className="mt-1 text-gray-600">{item.name}</p>
                        </div>
                     </div>
                  ))}

               </div>

            </Popover.Panel>
         </Transition>
      </Popover>



   )
}

export default NavDropdownComponent