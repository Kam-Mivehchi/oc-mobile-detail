import React from 'react'
import { ITier } from '@/content/'
import { CheckIcon } from '@heroicons/react/20/solid'
function classNames(...classes: string[]) {
   return classes.filter(Boolean).join(' ');
}
function ServiceCard({ tier }: { tier: ITier }) {
   return (
      <div
         key={tier.id}
         className={classNames(
            tier.mostPopular ? 'ring-2 ring-accent' : 'ring-1 ring-white',
            'rounded-3xl py-2 px-4 w-full grid auto-rows-min grid-cols-3  items-center gap-y-1 glass'
         )}
      >
         {tier.mostPopular ? (
            <p className="rounded-full bg-indigo-600/10 text-center text-xs font-semibold  text-accent col-span-full ">
               Most popular
            </p>
         ) : null}
         <div className=" col-span-2 flex-col row-span-1">
            <h3
               id={tier.id}
               className={classNames(
                  tier.mostPopular ? 'text-accent' : 'text-white',
                  'text-md font-semibold leading-8'
               )}
            >
               {tier.name}
            </h3>
         </div>
         <p className="row-span-1 col-span-1 justify-self-end">
            {/* I had to add 'as keyof typeof tier.price. I am not sure why typescript needed this' */}
            <span className=" font-medium tracking-tight text-white text-sm">Starting at {tier.price.Sedan}</span>
         </p>
         <a
            href={tier.href}
            aria-describedby={tier.id}
            className={classNames(
               tier.mostPopular
                  ? 'bg-accent text-white shadow-sm hover:bg-indigo-500'
                  : 'text-white ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
               ' block rounded-full py-1 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-24 row-span-1 col-span-1 col-start-3 justify-self-end'
            )}
         >
            Buy plan
         </a>

         <div className={classNames(
            tier.mostPopular
               ? 'row-start-3'
               : 'row-start-2',
            "col-span-2 "
         )}>

            <p className="text-xs leading-3 text-white ">{tier.description}</p>
         </div>
         <ul role="list" className="  text-sm font-thin leading-6 text-gray-600  row-span-1 col-span-3 flex flex-wrap items-center justify-center gap-x-4">
            {tier.features.map((feature) => (
               <li key={feature} className="flex gap-x-1 ">
                  <CheckIcon className="h-4 w-3 flex-none text-accent " aria-hidden="true" />
                  <span className='text-white w-max text-xs h-0'>{feature}</span>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default ServiceCard