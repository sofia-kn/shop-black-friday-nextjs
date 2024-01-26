"use client";
import BlackHeadphoneBanner from "./(components)/home/BlackHeadphoneBanner";
import PinkHeadphoneBanner from "./(components)/home/PinkHeadphoneBanner";
import Timer from "./(components)/home/Timer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between mt-10 lg:mt-[15rem]">
      <Timer />
      <div className="container relative px-5 mr-2 md:px-7  lg-max:px-[74px] 2xl-max:px-[90px]">
        <BlackHeadphoneBanner />
      </div>
      <PinkHeadphoneBanner/>
    </main>
  );
}
