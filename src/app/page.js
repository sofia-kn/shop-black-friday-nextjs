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
        <div className="w-[33.8rem] h-[9.9rem] flex justify-between">
          <div className="bg-slate-500 basis-32 flex flex-col justify-center items-center border-2 border-[#ffffffcf] ">
            <span className="text-4xl mb-3">{timerDays}</span>
            Days
          </div>
          <div className="bg-slate-500 basis-32 flex flex-col justify-center items-center border-2 border-[#ffffffcf] ">
            <span className="text-4xl mb-3">{timerHours}</span>
            Hours
          </div>
          <div className="bg-slate-500 basis-32 flex flex-col justify-center items-center border-2 border-[#ffffffcf] ">
            <span className="text-4xl mb-3">{timerMinutes}</span>
            Minutes
          </div>
          <div className="bg-slate-500 basis-32 flex flex-col justify-center items-center border-2 border-[#ffffffcf] ">
            <span className="text-4xl mb-3">{timerSeconds}</span>
            Seconds
          </div>
        </div>
      )}

      <div className="w-full h-[54rem] relative bgImg p-14">
        {/* <div className="absolute w-full h-[54rem]">
          <Image
            src="/assets/images/bg-006.jpg"
            fill
            // width={300}
            // height={500}
            alt="image"
          />
        </div> */}
        <div className="absolute text-white flex flex-col justify-center items-center">
          <Image
            src="/assets/images/headphone-01.png"
            width={100}
            height={100}
          />
          <h3 className="text-[#FF4955]">Up to 50% Off</h3>
          <h2>Grab Your Favorites Before They're Gone</h2>
          <p className="text-center w-full">
            You can trust us to bring you the latest technology at unbeatable
            prices. Don’t miss this limited-time opportunity to upgrade your
            audio game. Grab your perfect pair now!
          </p>
        </div>
      </div>
    </main>
  );
}
