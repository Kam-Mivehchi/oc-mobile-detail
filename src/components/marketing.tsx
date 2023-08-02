import React from 'react'

interface IMarketingContent {
   header: string;
   intro1: string;
   intro2: string;
   company: string
}

const marketingContent: IMarketingContent = {
   header: "Top-Rated Mobile Detailing & Car Wash Services in Orange County",
   intro1: "Welcome to ",
   intro2: " - Your Trusted Mobile Detailing and Car Wash Experts in Orange County, California! We take immense pride in providing premium car care solutions that come to you. Our experienced team of professionals is dedicated to giving your vehicle the ultimate treatment, leaving it looking showroom-ready.",
   company: "OC Mobile Detailing"
}

export default function Marketing() {
   return (
      <section className=" px-2 sm:px-6 lg:px-8  flex flex-col items-center  gap-8 text-center ">
         <h1 className="text-4xl font-bold">{marketingContent.header}</h1>
         <p className="md:text-xl px-4 lg:px-16 md:leading-loose ">{marketingContent.intro1}<span className="text-accent font-bold">{marketingContent.company}</span> {marketingContent.intro2}</p>
      </section>
   )
}
