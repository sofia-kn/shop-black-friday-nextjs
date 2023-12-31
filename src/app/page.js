"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Home() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("May 30, 2020 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //stop our timer
        clearInterval(interval.current);
      } else {
        //update our timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
    
  };
  console.log(timerDays);
  //componentDidMount
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 font-kaushanScriptRegular">
      <div className="bg-red-400 w-[33.8rem] h-[9.9rem] flex justify-between">
        <div className="bg-slate-500 basis-28 flex flex-col justify-center items-center border-2 border-[#ffffffcf] ">
          <span className="text-4xl mb-3">{timerDays}</span>
          Days
        </div>
        <div className="bg-slate-500 basis-28 flex flex-col justify-center items-center border-2 border-[#ffffffcf] ">
          <span className="text-4xl mb-3">{timerHours}</span>
          Hours
        </div>
        <div className="bg-slate-500 basis-28 flex flex-col justify-center items-center border-2 border-[#ffffffcf] ">
          <span className="text-4xl mb-3">{timerMinutes}</span>
          Minutes
        </div>
        <div className="bg-slate-500 basis-28 flex flex-col justify-center items-center border-2 border-[#ffffffcf] ">
          <span className="text-4xl mb-3">{timerSeconds}</span>
          Seconds
        </div>
      </div>
    </main>
  );
}
