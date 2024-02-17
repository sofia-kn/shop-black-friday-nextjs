"use client";
import BlackFridayMadness from "./components/home/BlackFridayMadness";
import BlackHeadphoneBanner from "./components/home/BlackHeadphoneBanner";
import CustomerTestimonials from "./components/home/CustomerTestimonials";
import PinkHeadphoneBanner from "./components/home/PinkHeadphoneBanner";
import TimeOffer from "./components/home/TimeOffer";
import Timer from "./components/home/Timer";
import WhyChoseBlackFriday from "./components/home/WhyChoseBlackFriday";
import BlackFridaySale from "./components/home/BlackFridaySale";


const Home:React.FC = () =>{
  return (
   <>
      <main className="flex flex-col items-center justify-between mt-10 lg:mt-[15rem]">
        <Timer />
        <div className="relative px-5 mr-2 md:px-7  lg-max:px-[74px] 2xl-max:px-[90px]">
          <BlackHeadphoneBanner />
        </div>
        <PinkHeadphoneBanner />
        <div className="mt-[7rem]">
          <BlackFridayMadness />
        </div>
        <div className="w-full px-5 mr-2 md:px-7 lg-max:px-[74px] 2xl-max:px-[90px] mt-[7rem]">
          <TimeOffer />
        </div>
        <div className="w-full mt-[7rem] px-5 mr-2 md:px-7  lg-max:px-[74px] 2xl-max:px-[90px]">
          <WhyChoseBlackFriday />
        </div>
        <div className="w-full mt-[7rem] px-5 mr-2 md:px-7  lg-max:px-[74px] 2xl-max:px-[90px]">
          <CustomerTestimonials />
        </div>
        <div className="body-bg-image pt-[25rem] px-[2rem] mb-[8rem] w-full h-screen flex flex-row justify-center items-center">
          <BlackFridaySale />
        </div>
      </main>
   </>
 
  );
}
 export default Home;