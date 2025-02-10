import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-10">
      <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
        <div className="hero-map" />

        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
          <h1 className="bold-52 lg:bold-80">Adventure YAMP Mumbai Camp Area</h1>
          <p className="regular-16 mt-6 text-zinc-600 xl:max-w-[520px]">
            We want to be on each of your journeys seeking the satisfaction of
            seeing the incorruptible beauty of nature. We can help you on an adventure
            around the world in just one app
          </p>
          <div className="my-11 flex flex-wrap gap-5">
            <div className="flex items-center gap-2">
              {Array(5)
                .fill(1)
                .map((_, index) => (
                  <Image src="/star.svg" key={index} alt="star" width={24} height={24} />
                ))}
            </div>
            <p className="text-lime-800 font-semibold">
              198K
              <span className="regular-16 lg:regular-20 ml-1 underline">Excellent Reviews</span>
            </p>
          </div>

          <div className="flex flex-col w-full gap-3 sm:flex-row">
            <Button 
              type="button" 
              title="Download App" 
              variant="btn_dark_green" 
            />
            <Button 
              type="button" 
              title="How we work?" 
              icon="/play.svg"
              variant="btn_white_text" 
            />
          </div>
        </div>

        {/* Location Block with Background Image */}
        <div className="relative flex flex-1 items-start">
          {/* Wrapper for background image and content */}
          <div className="relative">
            {/* Background Image */}
            <Image 
                src="/hero-bg.svg" 
                alt="bg-hero" 
                width={100} 
                height={100}
                className="absolute top-0 left-0 -z-10"
            />
            {/* Location block content */}
            <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-950 px-7 py-8">
              <div className="flex flex-col">
                <div className="flexBetween">
                  <p className="regular-16 text-gray-50">Location</p>
                  <Image src="/close.svg" alt="close" width={24} height={24} />
                </div>
                <p className="bold-20 text-white">YMCA’s Camp Lakeside</p>
              </div>
              <div className="flexBetween">
                <div className="flex flex-col">
                  <p className="regular-16 block text-gray-50">Distance</p>
                  <p className="bold-20 text-white">173.28 miles</p>
                </div>
                <div className="flex flex-col">
                  <p className="regular-16 block text-gray-50">Elevation</p>
                  <p className="bold-20 text-white">2.040 km</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Hero
