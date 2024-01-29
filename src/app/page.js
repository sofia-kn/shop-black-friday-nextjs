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
      <div className="mt-[7rem]">
        <div className="flex flex-col">
          <h4 className="text-[#FF4955] text-[2rem] lg:text-[2.5rem] text-center font-Kr">
            Unbelievable Discounts Await You
          </h4>
          <h2 className="text-[3.3rem] md:text-[4rem] lg:text-[6rem] xl:text-[8rem] font-medium text-center font-Lr sm:mt-3 md:mt-0">
            BLACK FRIDAY MADNESS IS HERE!
          </h2>
          <span className="w-[60px] bg-white border-t-[0.7px] my-0 mx-auto mt-[2rem] md:mt-[1rem]"></span>
        </div>
        <div className="w-full grid gap-6 grid-cols-2 grid-rows-2 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-1 px-5 mr-2 md:px-7  lg-max:px-[74px] 2xl-max:px-[90px] mt-[3rem]">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div className="w-full px-5 mr-2 md:px-7 lg-max:px-[74px] 2xl-max:px-[90px] mt-10">
        <TimeOffer />
      </div>
    </main>
  );
}
