"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [partyTime, setPartyTime] = useState(false);
  const [timerDays, setTimerDays] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("02/13/2024 18:24:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setTimerDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setTimerHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setTimerMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setTimerSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <main className="flex flex-col items-center justify-between">
      {partyTime ? (
        <h1>Happy new year</h1>
      ) : (
        <div className="container w-full  flex justify-evenly mb-14 relative">
          <div className=" w-[75px] h-[100px] lg:w-[162px] lg:h-[162px] xl:w-[249px] xl:h-[249px] flex flex-col justify-center items-center border-[0.5px] border-[#ffffff59] ">
            <div className="flex w-[60px] h-[70px] lg:w-[100px] lg:h-[100px] xl:w-[165px] xl:h-[170px]">
              <div className="m-auto mt-[-1rem] lg:mt-[-2rem] xl:mt-[-3rem] font-Lr text-[40px] lg:text-[85px] xl:text-[146px] ">{timerDays}</div>
            </div>
            <span className="font-M lg:text-2xl">DAYS</span>
          </div>
        
          <div className="w-[75px] h-[100px] lg:w-[162px] lg:h-[162px] xl:w-[249px] xl:h-[249px]  flex flex-col justify-center items-center border-[0.5px] border-[#ffffff59] ">
            <div className="flex w-[60px] h-[70px] lg:w-[100px] lg:h-[100px] xl:w-[165px] xl:h-[170px]">
              <div className="m-auto mt-[-1rem] lg:mt-[-2rem] xl:mt-[-3rem] font-Lr text-[40px] lg:text-[85px] xl:text-[146px] ">{timerHours}</div>
            </div>
            <span className="font-M lg:text-2xl">HOURS</span>
          </div>
        
          <div className=" w-[75px] h-[100px] lg:w-[162px] lg:h-[162px] xl:w-[249px] xl:h-[249px]  flex flex-col justify-center items-center border-[0.5px] border-[#ffffff59] ">
            <div className="flex w-[60px] h-[70px] lg:w-[100px] lg:h-[100px] xl:w-[165px] xl:h-[170px]">
              <div className="m-auto mt-[-1rem] lg:mt-[-2rem] xl:mt-[-3rem] font-Lr text-[40px] lg:text-[85px] xl:text-[146px] ">{timerMinutes}</div>
            </div>
            <span className="font-M lg:text-2xl">MINUTES</span>
          </div>
        
          <div className=" w-[75px] h-[100px] lg:w-[162px] lg:h-[162px] xl:w-[249px] xl:h-[249px]  flex flex-col justify-center items-center border-[0.5px] border-[#ffffff59] ">
            <div className="flex w-[60px] h-[70px] lg:w-[100px] lg:h-[100px] xl:w-[165px] xl:h-[170px]">
              <div className="m-auto mt-[-1rem] lg:mt-[-2rem] xl:mt-[-3rem] font-Lr text-[40px] lg:text-[85px] xl:text-[146px] ">{timerSeconds}</div>
            </div>
            <span className="font-M lg:text-2xl">SECONDS</span>
          </div>
        
        </div>
      )}

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
