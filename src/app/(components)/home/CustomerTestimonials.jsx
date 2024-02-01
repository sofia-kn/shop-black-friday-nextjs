import React from "react";
import CustomerComment from "../elements/CustomerComment";

export default function CustomerTestimonials() {
  return (
    <div className="w-full relative py-[4rem] px-[2rem] lg:py-[9rem] lg:px-[7rem] TestimonialImage top-[7rem] ">
      <div className="sticky z-10">
        <div className="w-full basis-1/2">
          <h3 className="text-[#FF4955] text-[2rem] lg:text-[2.5rem] text-left lg:text-left font-Kr lg:mb-[1rem]">
            What Our Clients Say{" "}
          </h3>
          <h2 className="lg:w-[70%] lg:leading-[5rem] xl:leading-[7rem] text-[3.3rem] md:text-[4rem] lg:text-[6rem] xl:text-[8rem] font-medium  text-left lg:text-left font-Lr ">
            CUSTOMER TESTIMONIALS
          </h2>
        </div>

        <div className="flex flex-col gap-[7rem] lg:flex-row mt-[4rem] lg:mt-[8rem]">
          <CustomerComment
            comment={
              "I couldn't be happier with my Black Friday Shop experience. The deals were incredible, and the quality of the products I purchased exceeded my expectations. I was particularly impressed with the seamless shopping process and the quick, hassle-free delivery."
            }
            name={"James Oliver"}
          />

          <CustomerComment
            comment={
              "Absolutely thrilled with my experience at this online store! The selection is fantastic, the prices are unbeatable, and the customer service is top-notch. I recently purchased a camera, and not only did it arrive quickly, but the quality exceeded my expectations. Highly recommended!"
            }
            name={"Daniel Taylor"}
          />
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
}
