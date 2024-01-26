import Image from "next/image";
import MainDescription from "../elements/MainDescription";

export default function PinkHeadphoneBanner() {
  return (
    <div className="container w-full relative  mt-16  px-5 mr-2 md:px-7  lg-max:px-[74px] 2xl-max:px-[90px]">
      <div className=" text-white flex flex-col lg:flex-row-reverse justify-evenly items-center">
        <div className="bg-slate-50 relative w-full h-[300px] lg:w-1/2 lg:h-[700px]">
          <Image
            src="/assets/images/headphones-img-02.jpg"
            fill
            className="object-cover bg-center"
            alt="image"
          />
        </div>

        <MainDescription
          mt={"16rem"}
          w={"4/5"}
          pText={
            " You can trust us to bring you the latest technology at unbeatable. Don’t miss this limited-time opportunity to upgrade your audio game."
          }
        />
      </div>
    </div>
  );
}
