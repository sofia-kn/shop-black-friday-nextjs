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
    const target = new Date("01/04/2024 18:24:00");

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
        <div className="w-[33.8rem] h-[9.9rem] flex justify-between mb-14">
          <div className=" basis-32 flex flex-col justify-center items-center border-[0.5px] border-[#ffffff59] ">
            <span className="text-6xl mb-3 font-Lr">{timerDays}</span>
            <span className="font-M">Days</span>
          </div>
          <div className=" basis-32 flex flex-col justify-center items-center border-[0.5px] border-[#ffffff59] ">
            <span className="text-6xl mb-3 font-Lr">{timerHours}</span>
            <span className="font-M"> Hours</span>
          </div>
          <div className=" basis-32 flex flex-col justify-center items-center border-[0.5px] border-[#ffffff59] ">
            <span className="text-6xl mb-3 font-Lr">{timerMinutes}</span>
            <span className="font-M">Minutes</span>
          </div>
          <div className=" basis-32 flex flex-col justify-center items-center border-[0.5px] border-[#ffffff59] ">
            <span className="text-6xl mb-3 font-Lr">{timerSeconds}</span>
            <span className="font-M">Seconds</span>
          </div>
        </div>
      )}

      <div className="w-full h-[48rem] relative bgImg pt-8 pb-8">
        <div className=" text-white flex flex-col lg:flex-row-reverse justify-center items-center">
          <div className="p-6 pb-0 lg:basis-[50%]">
            <Image
              src="/assets/images/headphone-01.png"
              width={100}
              height={100}
              alt="image"
              priority='true'
              className="
              lg:w-[300px]

              "
            />
          </div>
          <div className=" m-8 mt-8 sm:min-w-[300px] md:max-w-[500px] lg:basis-[50%]">
            <h3 className="text-[#FF4955] text-4xl text-center font-Kr">
              Up to 50% Off
            </h3>
            <h2 className="sm:text-6xl md:text-8xl font-medium	text-center mt-6 mb-6 font-Lr break-words		">
              GRAB YOUR FAVORITES BEFORE THEY'RE GONE
            </h2>
            <p className="text-center w-full sm:text-xl md:text-2xl font-M text-slate-100">
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
