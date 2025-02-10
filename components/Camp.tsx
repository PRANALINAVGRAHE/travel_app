import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
  return (
    <div className={`max-w-[1440px] mx-auto relative min-w-[500px] min-h-[500px] ${backgroundImage} rounded-lg px-10 bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
      {/* Optimized Background Image */}
      <Image
        src={backgroundImage}
        alt="Camp Background"
        fill
        className="object-cover lg:rounded-r-5xl 2xl:rounded-5xl"
      />

      {/* Content overlay */}
      <div className="relative z-10 flex h-full flex-col items-start justify-between p-6 lg:px-10 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-500 p-3">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>

        <div className="flexCenter gap-4">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block h-10 w-10 rounded-full gap-3 mt-3"
                src={url}
                key={url}
                alt="person"
                width={32}
                height={32}
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-5 xl:mb-10">
      <div className="hide-scrollbar flex h-[100px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[100px] xl:h-[640px]">
        <CampSite
          backgroundImage="/img-1.png"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
        <CampSite
          backgroundImage="/img-2.png"
          title="Mountain View Camp"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
        />
      </div>

      <div className="flexEnd mt-5 px-3 lg:-mt-60 lg:mr-4">
        <div className="bg-lime-600 p-4 lg:max-w-[100px] xl:max-w-[734px] xl:rounded-5xl xl:px-10 xl:py-5 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong className="text-lime-800">Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-10 xl:regular-16 mt-3 text-white">
            Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure
          </p>
          <Image src="/quote.svg" alt="quote" width={186} height={219} className="camp-quote"/>
        </div>
      </div>
    </section>
  );
};

export default Camp;
