"use client";
import Image from "next/image";
import RedButton from "./(components)/elements/RedButton";
import Timer from "./(components)/home/Timer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Timer />
      <div className="container w-full relative bgImg">
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
          <div className=" m-8 mt-8 sm:min-w-[300px] md:max-w-[500px] flex justify-between flex-col">
            <h3 className="text-[#FF4955] text-xl lg:text-3xl text-center font-Kr lg:text-left">
              Up to 50% Off
            </h3>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium	text-center mt-6 mb-6 font-Lr break-words	lg:text-left	">
              GRAB YOUR FAVORITES BEFORE THEY'RE GONE
            </h2>
            <p className="text-center w-full text-sm md:text-xl lg:text-xl font-M text-slate-100 lg:text-left mb-6">
              You can trust us to bring you the latest technology at unbeatable
              prices. Don’t miss this limited-time opportunity to upgrade your
              audio game. Grab your perfect pair now!
            </p>
            <RedButton />
          </div>
        </div>
      </div>
      <div className="container w-full relative  mt-16">
        <div className=" text-white flex flex-col lg:flex-row-reverse justify-evenly items-center">
          <div className="square bgImgPink relative text-right basis-2/4">
            <div className=" w-full bg-orange-200">
              <img
                src="/assets/images/image.jpg"
                className="absolute top-[-6rem] left-6 xl:left-[-9rem] xl:top-[2rem] w-[33%] xl:w-[28%]"
              ></img>
            </div>
          </div>

          <div className=" sm:min-w-[300px] md:max-w-[500px] flex justify-between flex-col xl:justify-end-end basis-2/4">
            <h3 className="text-[#FF4955] text-xl lg:text-3xl  font-Kr text-left mt-[16rem]">
              Black Friday Exclusive
            </h3>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium mt-5 mb-5 font-Lr break-words	text-left	">
              SAVE BIG: <span className="text-[#FF4955]">UP TO 75% OFF</span>
              <br></br>
              ON HEADPHONES
            </h2>
            <p className=" w-full text-sm md:text-xl lg:text-sm font-M text-slate-100 text-left mb-6">
              You can trust us to bring you the latest technology at unbeatable
              prices. Don’t miss this limited-time opportunity to upgrade your
              audio game.
            </p>
            <RedButton />
          </div>
        </div>
      </div>
    </main>
  );
}
