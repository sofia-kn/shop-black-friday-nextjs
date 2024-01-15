import React from "react";
import { useEffect, useState } from "react";

export default function Timer() {
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
    <>
      {partyTime ? (
        <h1>Happy new year</h1>
      ) : (
        <div className="container w-full flex justify-center mb-14 relative">
          <div className=" w-[75px] h-[100px] lg:w-[162px] lg:h-[162px] xl:w-[249px] xl:h-[249px] flex flex-col justify-center items-center border-[0.5px] border-[#ffffff59] mr-5 lg:mr-10">
            <div className="flex w-[60px] lg:w-[100px] lg:h-[100px] xl:w-[165px] xl:h-[170px]">
              <div className="m-auto mt-[-1rem] lg:mt-[-2rem] xl:mt-[-3rem] font-Lr text-[40px] lg:text-[85px] xl:text-[146px] ">
                {timerDays}
              </div>
            </div>
            <span className="font-M lg:text-2xl">DAYS</span>
          </div>

          <div className="w-[75px] h-[100px] lg:w-[162px] lg:h-[162px] xl:w-[249px] xl:h-[249px]  flex flex-col justify-center items-center border-[0.5px] border-[#ffffff59] mr-5 lg:mr-10">
            <div className="flex w-[60px] lg:w-[100px] lg:h-[100px] xl:w-[165px] xl:h-[170px]">
              <div className="m-auto mt-[-1rem] lg:mt-[-2rem] xl:mt-[-3rem] font-Lr text-[40px] lg:text-[85px] xl:text-[146px] ">
                {timerHours}
              </div>
            </div>
            <span className="font-M lg:text-2xl">HOURS</span>
          </div>

          <div className=" w-[75px] h-[100px] lg:w-[162px] lg:h-[162px] xl:w-[249px] xl:h-[249px]  flex flex-col justify-center items-center border-[0.5px] border-[#ffffff59] mr-5 lg:mr-10">
            <div className="flex w-[60px] lg:w-[100px] lg:h-[100px] xl:w-[165px] xl:h-[170px]">
              <div className="m-auto mt-[-1rem] lg:mt-[-2rem] xl:mt-[-3rem] font-Lr text-[40px] lg:text-[85px] xl:text-[146px] ">
                {timerMinutes}
              </div>
            </div>
            <span className="font-M lg:text-2xl">MINUTES</span>
          </div>

          <div className=" w-[75px] h-[100px] lg:w-[162px] lg:h-[162px] xl:w-[249px] xl:h-[249px]  flex flex-col justify-center items-center border-[0.5px] border-[#ffffff59] mr-5 lg:mr-10">
            <div className="flex w-[60px] lg:w-[100px] lg:h-[100px] xl:w-[165px] xl:h-[170px]">
              <div className="m-auto mt-[-1rem] lg:mt-[-2rem] xl:mt-[-3rem] font-Lr text-[40px] lg:text-[85px] xl:text-[146px] ">
                {timerSeconds}
              </div>
            </div>
            <span className="font-M lg:text-2xl">SECONDS</span>
          </div>
        </div>
      )}
    </>
  );
}
