import * as React from 'react'
import Image from 'next/image'
import ServiceCard from './service-card'
import { ICityData, tiers } from '@/content/'
function CityPage({ data }: { data: ICityData }) {
   return (
      <section
         className='flex flex-col items-center max-w-3xl mx-auto relative p-2'>
         <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-primary ">{data.name}</h1>
         <div className=" grid place-content-center w-full image-fade rounded-xl  absolute h-full top-16 " style={{
            background: `url("${data.img}")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: `${data.position}`

         }} >

            {/* <div className="relative w-full h-24 bg-repeat">

<Image src={data.img} alt={`${data.name} background image`} fill className="" />
</div> */}
         </div>
         <p className="relative">{data.description}</p>
         {/* //list of services */}
         <ul className="grid  p-2 w-full  place-content-center gap-2 grid-cols-1 md:grid-cols-2 ">
            {tiers.map((service, index) => {

               return (<ServiceCard tier={service} key={`${service}_${index}`} />)
            })}

         </ul>
      </section >

   )
}

export default CityPage