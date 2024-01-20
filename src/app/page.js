"use client";
import Image from "next/image";
import MainDescription from "./(components)/elements/MainDescription";
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
              width={400}
              height={250}
              alt="image"
              sizes="100vw"
              style={{ width: "100%" }}
            />
          </div>
          <MainDescription m={"8"} mtop={"8"} pText={"You can trust us to bring you the latest technology at unbeatable prices. Don’t miss this limited-time opportunity to upgrade your audio game. Grab your perfect pair now!"}/>
        </div>
      </div>
      <div className="container w-full relative  mt-16">
        <div className=" text-white flex flex-col lg:flex-row-reverse justify-evenly items-center">
          <div className="bg-slate-50 relative w-full h-[300px] lg:w-1/2 lg:h-[700px]">
            <Image
              src="/assets/images/headphones-img-02.jpg"
              fill
              className="object-cover bg-center"
              alt="image"
            />
          </div>

          {/* <div className=" lg:w-1/2 flex justify-between flex-col md:justify-end-end basis-2/4 mt-[2rem] lg:mt-[16rem]">
            <h3 className="text-[#FF4955] text-xl md:text-3xl  font-Kr text-left ">
              Black Friday Exclusive
            </h3>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium mt-5 mb-5 font-Lr break-words	text-left	">
              SAVE BIG: <span className="text-[#FF4955]">UP TO 75% OFF</span>
              <br></br>
              ON HEADPHONES
            </h2>
            <p className="lg:w-4/5 text-sm md:text-xl lg:text-sm font-M text-slate-100 text-left mb-6">
              You can trust us to bring you the latest technology at unbeatable
              prices. Don’t miss this limited-time opportunity to upgrade your
              audio game.
            </p>
            <RedButton />
          </div> */}
          <MainDescription
            mt={"16rem"}
            w={"4/5"}
            pText={
              " You can trust us to bring you the latest technology at unbeatable. Don’t miss this limited-time opportunity to upgrade your audio game."
            }
          />
        </div>
      </div>
    </main>
  );
}
