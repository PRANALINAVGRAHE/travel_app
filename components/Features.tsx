import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <div  className="max-w-[1440px] mx-auto px-10">
      <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-15">
          <div className="max-container padding-container relative w-full flex justify-end">
            <div className="flex flex-1 lg:min-h-[900px]">
                <Image src="/phone.png" alt="phone" width={290} height={300} className='feature-phone'/>
            </div>


            <div className="z-20 flex w-full flex-col lg:w-[60%]">
                <div className='relative'>
                
            <h2 className="bold-40 lg:bold-64 text-yellow-600 justify-center
             text-align-right mt-4">Our Features</h2>
                </div>

                <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:mg-1y nextjs project forfree0 lg:gap-10">
                  {FEATURES.map((feature) => (
                    <FeatureItem 
                      key={feature.title}
                      title={feature.title} 
                      icon={feature.icon}
                      description={feature.description}
                    />
                  ))}
                </ul>
            </div>
          </div>

      </section>
    </div>
  )
}

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
}


const FeatureItem=({title, icon, description}: FeatureItem)=>{
  return(
      <li className="flex w-full flex-1 flex-col items-start">
          <div className="rounded-full p-4 lg:p-7 bg-green-500">
              <Image src={icon} alt="map" width={20} height={20} />
          </div>
          <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
              {title}
          </h2>
          <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
              {description}
          </p>

      </li>
  )
}

export default Features
