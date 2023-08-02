import React from 'react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
function Results() {
   return (
      <section className="px-2 sm:px-6 lg:px-8  flex flex-col items-center  gap-8 text-center ">
         <h2 className="text-4xl lg:text-5xl font-bold text-center text-accent">Results</h2>
         <div className="flex flex-col lg:flex-row flex-wrap gap-y-8">

            <div className="px-2 lg:w-1/2 ">
               <ReactCompareSlider
                  style={{ borderRadius: '.75em' }}
                  changePositionOnHover={true}
                  itemOne={<ReactCompareSliderImage src="..." srcSet="/assets/cars/audi.jpg" alt="Image one" />}
                  itemTwo={<ReactCompareSliderImage src="..." srcSet="/assets/cars/porsche.jpg" alt="Image two" />}
               />

            </div>
            <div className="px-2 lg:w-1/2">

               <ReactCompareSlider
                  style={{ borderRadius: '.75em' }}
                  changePositionOnHover={true}
                  itemOne={<ReactCompareSliderImage src="..." srcSet="/assets/cars/porsche.jpg" alt="Image one" />}
                  itemTwo={<ReactCompareSliderImage src="..." srcSet="/assets/cars/audi.jpg" alt="Image two" />}
               />
            </div>
            <div className="px-2 lg:w-1/2 ">
               <ReactCompareSlider
                  style={{ borderRadius: '.75em' }}
                  changePositionOnHover={true}
                  itemOne={<ReactCompareSliderImage src="..." srcSet="/assets/cars/audi.jpg" alt="Image one" />}
                  itemTwo={<ReactCompareSliderImage src="..." srcSet="/assets/cars/porsche.jpg" alt="Image two" />}
               />

            </div>
            <div className="px-2 lg:w-1/2">

               <ReactCompareSlider
                  style={{ borderRadius: '.75em' }}
                  changePositionOnHover={true}
                  itemOne={<ReactCompareSliderImage src="..." srcSet="/assets/cars/porsche.jpg" alt="Image one" />}
                  itemTwo={<ReactCompareSliderImage src="..." srcSet="/assets/cars/audi.jpg" alt="Image two" />}
               />
            </div>
         </div>
      </section>
   )
}

export default Results