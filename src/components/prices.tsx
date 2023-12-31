"use client";
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
import * as React from 'react'

const frequencies = [
  { value: 'Sedan', label: 'Sedan', priceSuffix: '/month' },
  { value: 'Trucks/SUV', label: 'Trucks/SUV', priceSuffix: '/year' },
]
export const tiers = [
  {
    name: 'Basic Wash',
    id: 'tier-freelancer',
    href: '#',
    price: { Sedan: '$60', SUV: '$70' },
    description: 'Spot free exterior wash.',
    features: ['Exterior rinse', 'Rims', 'Tires', 'Spot free'],
    mostPopular: false,
  },
  {
    name: 'Wash and Wax',
    id: 'tier-freelancer',
    href: '#',
    price: { Sedan: '$150', SUV: '$175' },
    description: 'Spot free exterior wash with interior vacuum and wipe down.',
    features: ['Exterior Rinse', 'Rims and tires', 'Interior vacuum', 'Interior wipe down', 'Spot free'],
    mostPopular: true,
  },
  {
    name: 'Exterior Detail',
    id: 'tier-startup',
    href: '#',
    price: { Sedan: '$175', SUV: '$195' },
    description: 'Spot free rinse with polish and wax.',
    features: [
      'Exterior Rinse',
      'Hand waxed and shined',
      'Rims and Tires',
      'Spot free',
      'Hand dried',
    ],
    mostPopular: false,
  },
  {
    name: 'Interior Detail',
    id: 'tier-startup',
    href: '#',
    price: { Sedan: '$175', SUV: '$195' },
    description: 'Interior vacuum, wipe down, and shampoo.',
    features: [
      'Interior vacuum',
      'Wipe down',
      'Seat shampoo',
      'Stain removal',
      'Scent of your choice',
    ],
    mostPopular: false,
  },
  {
    name: 'Full Detail',
    id: 'tier-enterprise',
    href: '#',
    price: { Sedan: '$350', SUV: '$375' },
    description: 'Spot free rinse with police and wax. Interior vacuum, wipe down, and shampoo.',
    features: [
      'Hand washed and waxed',
      'Interior vacuum and wipe down',
      'Seat shampoo',
      'Rims and tires',
      'Spot free rise and hand dry',
      'Scent of your choice',
    ],
    mostPopular: false,
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Pricing() {
  const [frequency, setFrequency] = React.useState<Frequency>(frequencies[0])

  type Frequency = {
    value: string;
    label: string;
    priceSuffix: string;
  }

  return (
    <div className="pt-8" >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-accent sm:text-5xl">
            Services
          </h1>
        </div>
        <p className="text-center my-6 text-2xl font-semibold mx-auto">Ready to Treat Your Car to the Ultimate Care?</p>
        <p className="mx-auto max-w-2xl  text-lg leading-8 text-white">

          Explore our detailed service packages below and book your appointment today! If you have any questions or special requests, don't hesitate to contact our friendly team. We look forward to serving you and your car!
        </p>
        <div className="mt-16 flex justify-center">
          <RadioGroup
            value={frequency}
            onChange={setFrequency}
            className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200"
          >
            <RadioGroup.Label className="sr-only">Payment frequency</RadioGroup.Label>
            {frequencies.map((option) => (
              <RadioGroup.Option
                key={option.value}
                value={option}
                className={({ checked }) =>
                  classNames(
                    checked ? 'bg-accent text-white' : 'text-gray-500',
                    'cursor-pointer rounded-full px-2.5 py-1'
                  )
                }
              >
                <span>{option.label}</span>
              </RadioGroup.Option>
            ))}
          </RadioGroup>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3" >
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'ring-2 ring-accent' : 'ring-1 ring-white',
                'rounded-3xl p-8 xl:p-10'
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className={classNames(
                    tier.mostPopular ? 'text-accent' : 'text-white',
                    'text-lg font-semibold leading-8'
                  )}
                >
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-accent">
                    Most popular
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-white">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                {/* I had to add 'as keyof typeof tier.price. I am not sure why typescript needed this' */}
                <span className="text-4xl font-bold tracking-tight text-white">{tier.price[frequency.value as keyof typeof tier.price]}</span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-accent text-white shadow-sm hover:bg-indigo-500'
                    : 'text-white ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                  'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                Buy plan
              </a>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-accent" aria-hidden="true" />
                    <span className='text-white'>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
