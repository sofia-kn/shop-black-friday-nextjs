import React from "react";
import Image from "next/image";
import RedButton from "../elements/RedButton";

export default function TimeOffer() {
  return (
    <>
      <div className="relative w-full h-[300px] lg:h-[650px] px-5 mr-2 md:px-7 lg-max:px-[74px] 2xl-max:px-[90px]">
        <Image
          src="/assets/images/bg-07.jpg"
          fill
          className="object-cover bg-center"
          alt="image"
        />
        <div className="absolute top-[50%] left-[50%] centerTransform z-10">
          <h3 className="text-[#FF4955]  text-[2rem] lg:text-5xl text-center font-Kr xl:mb-[2.5rem]">
            Limmited-Time Offer
          </h3>
          <h2 className="w-[250px] md:w-[300px] xl:w-[900px] text-5xl md:text-6xl xl:text-[7rem] font-medium text-center my-5 font-Lr ">
            SAVE BIG:UP TO{" "}
            <span className="text-[#FF4955] text-5xl md:text-6xl xl:text-[7rem] mr-3">
              60% OFF
            </span>
            ON ALL HEADPHONES <br />
            <span className="lg:text-5xl">ACT FAST BEFORE THEY'RE GONE</span>
          </h2>

          <RedButton textCenter={"center"} />
        </div>
        <div className="overlay"></div>
      </div>
    </>
  );
}
