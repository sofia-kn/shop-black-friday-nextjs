
export default function page() {
  return (
    <>
      <div className="absolute bottom-[45rem] md:bottom-[40rem] flex w-full flex-col justify-center items-center  mt-[115px] md:mt-[157px] lg:mt-[175px] lg-max:mt-[212px] 3xl-max:mt-[215px]  px-2">
        <p className="text-[#FF4955] mb-7 3xl-max:mb-6  font-Kr text-[20px] lg:text-[23px] lg-max:text-[30px]">
          A Few Words
        </p>
        <h1 className="text-[5.6rem] lg:text-[10rem] lg-max:text-[11rem]  leading-[5.1rem] lg:leading-[9rem] lg-max:leading-[10rem] tracking-[0] font-Lr font-normal uppercase ">
          ABOUT US
        </h1>
        <span className="w-[6rem] borderRed mt-[3rem] md:mt-[4rem]"></span>
      </div>

      <main className="flex flex-col items-center justify-between relative bottom-[35rem] lg:mt-[5rem] customContainer">
        <div className="w-full h-[25.5rem] relative aboutPageImage xl:bg-fixed xl:h-[36.5rem] "></div>

        <div className="lg:flex lg:justify-between lg:items-center lg:mt-[8rem]">
          <div className="mt-8 md:mt-[7rem] lg:basis-[50%] lg:mt-0">
            <h3 className="text-[#FF4955] text-[2rem] md:text-[2.5rem] font-Kr">
              Our Story
            </h3>
            <h2 className="w-[90%] md:w-[95%] leading-8 my-6 font-Lr md:mb-14">
              <span className="text-[3.5rem] md:text-6xl md:text-[6rem] uppercase">
                Our story is one of{" "}
              </span>
              <span className="text-[3.5rem] md:text-6xl md:text-[6rem] text-[#FF4955] uppercase">
                passion, perseverance, and commitment
              </span>
            </h2>
          </div>

          <div className="lg:basis-[50%]">
            <h4 className="text-[2.5rem] leading-[3rem] font-Lr text-slate-100 mt-12 lg:mt-0 uppercase">
              Our journey began when a group of dedicated individuals, fueled by
              a shared love for exceptional deals and unmatched savings, came
              together to create a shopping experience like no other{" "}
            </h4>

            <p className="xl:pr-[250px] text-[1.4rem] font-M text-slate-100 lg:text-left mt-8">
              Founded in 2008, BlackFridayShop set out with a simple mission –
              to make Black Friday accessible to everyone, delivering the thrill
              of unbeatable discounts to your fingertips. Over the years, we've
              dedicated ourselves to curating the finest selection of products,
              from electronics and fashion to home essentials and more, all with
              one goal in mind: providing you with the ultimate shopping
              experience.<br></br> What sets us apart is our relentless pursuit
              of quality and value. We've scoured the market for the finest
              products, establishing partnerships with trusted brands that share
              our commitment to excellence. This dedication ensures that every
              item you find at BlackFridayShop meets the highest standards of
              quality.
            </p>
          </div>
        </div>

        <div className="grid relative w-full aboutPageBoundlessImage h-[42rem] mt-10">
          <div className="m-auto text-center px-[3rem] z-10">
            <h4 className="text-[2.5rem] font-Lr uppercase">
              boundless love for saving
            </h4>
            <h3 className="font-Kr text-[2rem] px-4 mt-4">
              We've scoured the market for the finest products, establishing
              partnerships with trusted brands that share our commitment to
              excellence!
            </h3>
            <span className="flex borderWhite mx-[11rem] mt-[3rem] md:mt-[4rem]"></span>
          </div>
          <div className="overlay"></div>
        </div>

{/* our values section */}
        <div className="lg:flex lg:flex-row-reverse mt-6 lg:mt-[7rem]">
<div className="aboutPageOurValuesImage w-full h-[33rem] lg:h-auto lg:basis-[50%]">

</div>
          <div className="lg:basis-[50%]">
            <div className="mt-8 md:mt-[7rem] lg:mt-0">
              <h3 className="text-[#FF4955] text-[2rem] md:text-[2.5rem] font-Kr">
                Our Values
              </h3>
              <h2 className="w-[90%] md:w-[95%] leading-8 my-6 font-Lr md:mb-14">
                <span className="text-[3.5rem] md:text-6xl md:text-[6rem] uppercase">
                  OUR VALUES ARE AT THE HEART OF EVERYTHING WE DO
                </span>
              </h2>
            </div>

            <div>
              <p className="xl:pr-[250px] text-[1.4rem] font-M text-slate-100 lg:text-left mt-8">
                Our values are the foundation upon which BlackFridayShop is
                built. They’re not just words on a page; they’re the principles
                that drive our everyday actions and decisions. We are dedicated
                to upholding these values and ensuring that they shine through
                in every aspect of your experience with us.
                <br></br>
                <br></br>
                Thank you for choosing BlackFridayShop, where our values meet your
                expectations.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
