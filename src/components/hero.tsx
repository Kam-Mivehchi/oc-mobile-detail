import React from 'react'
import Image from 'next/image'


interface IContent {
   hook: string;
   hook2: string;
   details: string;
   cta: string;
}
const content: IContent = {
   hook: "Dirty Car?",
   hook2: "Orange County, We've Got You Covered!",
   details: "OC Mobile Detailing is one of the most established and top-rated auto detailing service in Orange County, Ca.",
   cta: "Book Now!"
}
function Hero() {
   return (<div className="  px-2 sm:px-6 lg:px-8 h-[70vh] flex flex-col items-center md:flex-row ">
      <div className="text-white flex-1 flex flex-col gap-4 text-center items-center md:text-left md:items-start">
         <h1 className=" text-6xl md:text-8xl w-max font-bold text-accent text-transparent bg-clip-text bg-gradient-to-br from-white   to-accent">{content.hook}</h1>
         <h2 className=" text-3xl md:text-4xl font-bold text-accent">{content.hook2}</h2>
         <p className="md:text-2xl leading-6">{content.details}</p>
         <button className='bg-accent px-6 py-2 text-xs font-medium  hover:text-white hover:shadow-accent/50 hover:bg-accent/70 transition-all ease-in rounded-full  w-max shadow-md shadow-black/30 border-2 duration-200 text-black ' >
            {content.cta}
         </button>
      </div>
      <div className="text-white flex-1">
         <Image
            src='/assets/hero.png'
            alt="Ferarri"
            width={750}
            height={450}
            className=''
            style={{ transform: "rotateY(180deg)", filter: "drop-shadow(0 10px 20px rgb(0 0 0 / .9))" }}
         />
      </div>
   </div >
   )
}

export default Hero