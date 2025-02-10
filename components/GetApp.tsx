import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 rounded-lg">
        <section className="flexCenter w-full flex-col pb-[100px]">
            <div className="get-app">
                  <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
                      <h2 className="bold-40 lg:bold-64 xl:max-w-[320px] text-yellow-600">Get for free now!</h2>
                      <p className="regular-16 text-gray-10 text-orange-600">Available on iOS and Android</p>


                      <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row ">
                        <Button 
                              type="button"
                              title="App Store"
                              icon="/apple.svg"
                              variant="btn_white"
                        />
                        <Button 
                              type="button"
                              title="Play Store"
                              icon="/android.svg"
                              variant="btn_dark_green_outline"
                              
                        />
                  </div>


                  </div>
                  <div className="flex flex-1 items-center justify-end">
                        <Image src="/phones.png" alt="phones" width={400} height={750} />
                  </div>
            </div>
        </section>
    </div>
  )
}

export default GetApp
