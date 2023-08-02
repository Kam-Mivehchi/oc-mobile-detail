'use client';
import React from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
function About() {

   return (<Transition as="main" className="max-w-[1280px] mx-auto transition-all duration-700 text-white px-2 sm:px-6 lg:px-8 flex flex-col gap-6 pt-10 text-center "
      appear={true}
      show={true}
      enter="ease-in-out"
      enterFrom="translate-x-full opacity-0"
      enterTo="translate-x-0 opacity-100"
      leave="ease-out"
      leaveFrom="translate-x-0 opacity-100"
      leaveTo="-translate-x-full opacity-0">



      <h1 className="text-4xl sm:text-5xl font-bold text-accent text-center m">About</h1>

      <Image src="/assets/cars/porsche.jpg" height={500} width={1200} alt="mobile car wash image" className='rounded-xl border border-accent/50' />
      <p className=" md:leading-loose lg:leading-loose md:text-xl lg:text-2xl font-semibold"> OC Mobile Detailing is one of the most established and top-rated auto detailing that you will find around in Orange County.
      </p>
      <p className=" md:leading-loose lg:leading-loose md:text-xl lg:text-2xl" >Whether you have lived in Irvine, Newport Beach, or Lake Forest for your entire life, or you have recently moved here, you know that our master-planned city is one of the most popular for people to call home in Orange County. With a population exceeding 260,000, we are also one of the quickest growing cities in SoCal making the full range of car wash services often seeing a fair amount of competition to just get an appointment on a normal weekend.
      </p>
      <p className="md:leading-loose lg:leading-loose md:text-xl lg:text-2xl">

         Whether you work in the tech sector, at one of our local universities, or somewhere in between, you probably don’t have a lot of time to waste when visiting your auto detailing Orange County service provider. If you are in this situation, then you should definitely make it a point to check us out at OC Mobile Detailing. Our company is one of the most highly-rated in the local area, and we have been open for business for 12 years and counting now.
      </p>

   </Transition>
   )
}

export default About