"use client";
import Image from "next/image";
import Timer from "./(components)/home/Timer";

export default function Home() {
  

  return (
    <main className="flex flex-col items-center justify-between">
    <Timer/>
      <div className="container w-full relative bgImg p-20 ">
        <div className=" text-white flex flex-col lg:flex-row-reverse justify-evenly items-center">
          <div className="p-6 pb-0 ">
            <Image
              src="/assets/images/headphone-02.png"
              width={280}
              height={380}
              alt="image"
              className="sm:w-[115px] lg:w-[480px] xl:w-[480px] "
              priority
            />
          </div>
          <div className=" m-8 mt-8 sm:min-w-[300px] md:max-w-[500px]">
            <h3 className="text-[#FF4955] text-4xl text-center font-Kr lg:text-left">
              Up to 50% Off
            </h3>
            <h2 className="sm:text-6xl md:text-6xl lg:text-8xl font-medium	text-center mt-6 mb-6 font-Lr break-words	lg:text-left	">
              GRAB YOUR FAVORITES BEFORE THEY'RE GONE
            </h2>
            <p className="text-center w-full sm:text-xl md:text-xl lg:text-2xl font-M text-slate-100 lg:text-left">
              You can trust us to bring you the latest technology at unbeatable
              prices. Don’t miss this limited-time opportunity to upgrade your
              audio game. Grab your perfect pair now!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
