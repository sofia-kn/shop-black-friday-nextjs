"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function page() {
    return (<>
      <div className="absolute bottom-[45rem] md:bottom-[7rem] xl:bottom-[7rem] flex w-full flex-col justify-center items-center  mt-[115px] md:mt-[157px] lg:mt-[175px] lg-max:mt-[212px] 3xl-max:mt-[215px]  px-2">
        <p className="text-[#FF4955] mb-7 3xl-max:mb-6  font-Kr text-[20px] lg:text-[23px] lg-max:text-[30px]">
          A Few Words
        </p>
        <h1 className="text-[5.6rem] lg:text-[10rem] lg-max:text-[11rem]  leading-[5.1rem] lg:leading-[9rem] lg-max:leading-[10rem] tracking-[0] font-Lr font-normal uppercase ">
          ABOUT US
        </h1>
        <span className="w-[60px] borderRed mt-[3rem] md:mt-[1rem]"></span>
      </div>

      <main className="flex flex-col items-center justify-between relative bottom-[35rem] lg:mt-[15rem] customContainer">
        <div className="w-full h-[25.5rem] relative py-[4rem] px-[2rem] lg:py-[9rem] lg:px-[7rem] aboutPageImage"></div>
        <div className='mt-8 lg:mt-[3rem]'>
          <h3 className="text-[#FF4955] text-[2rem] lg:text-[2.5rem] font-Kr">
            Our Story
          </h3>
          <h2 className="w-[90%] leading-8 mt-6 mb-6 font-Lr lg:text-left">
            <span className="text-[3.5rem] md:text-6xl lg:text-7xl uppercase">
              Our story is one of{" "}
            </span>
            <span className="text-[3.5rem] md:text-6xl lg:text-7xl text-[#FF4955] uppercase">
              passion, perseverance, and commitment
            </span>
          </h2>
        </div>
      </main>
    </>);
}
exports.default = page;
