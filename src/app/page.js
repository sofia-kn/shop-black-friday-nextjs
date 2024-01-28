"use client";
import ProductCard from "./(components)/elements/ProductCard.jsx";
import BlackHeadphoneBanner from "./(components)/home/BlackHeadphoneBanner";
import PinkHeadphoneBanner from "./(components)/home/PinkHeadphoneBanner";
import TimeOffer from "./(components)/home/TimeOffer.jsx";
import Timer from "./(components)/home/Timer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between mt-10 lg:mt-[15rem]">
      <Timer />
      <div className="relative px-5 mr-2 md:px-7  lg-max:px-[74px] 2xl-max:px-[90px]">
        <BlackHeadphoneBanner />
      </div>

      <PinkHeadphoneBanner />

      <div className="w-full grid gap-6 grid-cols-2 grid-rows-2 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-1 px-5 mr-2 md:px-7  lg-max:px-[74px] 2xl-max:px-[90px] my-32">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="w-full px-5 mr-2 md:px-7 lg-max:px-[74px] 2xl-max:px-[90px] mt-10">
        <TimeOffer />
      </div>
    </main>
  );
}
