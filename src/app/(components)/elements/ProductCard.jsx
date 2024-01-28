import Image from "next/image";
import React from "react";

export default function ProductCard() {
  return (
    <div>
      <div className="relative hover">
        <Image
          src="/assets/images/7-product-400x463.jpg"
          width={338}
          height={339}
          alt="image"
        />
        <span
          className="absolute top-[1.5em] left-[1.5em] bg-[#2a2a2a] text-[#ffffffcf] text-[1.2rem]
        md:text-[1.5rem] lg:text-[1.7rem]
        py-1 px-3 rounded-3xl cursor-pointer"
        >
          -36%
        </span>
        <span
          className="absolute top-[1.5em] right-[1.5em] bg-[#2a2a2a]  text-[1.2rem]
        md:text-[1.5rem] lg:text-[1.7rem]
        py-3 px-3.5 hidden showBag rounded-[50%] opacity-70 cursor-pointer showAddToCart"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="20"
            viewBox="826 826 140 140"
            enable-background="new 826 826 140 140"
          >
            <path
              fill="#ffffffcf"
              d="M960.758,934.509l2.632,23.541c0.15,1.403-0.25,2.657-1.203,3.761c-0.953,1.053-2.156,1.579-3.61,1.579H833.424  c-1.454,0-2.657-0.526-3.61-1.579c-0.952-1.104-1.354-2.357-1.203-3.761l2.632-23.541H960.758z M953.763,871.405l6.468,58.29H831.77  l6.468-58.29c0.15-1.203,0.677-2.218,1.58-3.045c0.903-0.827,1.981-1.241,3.234-1.241h19.254v9.627c0,2.658,0.94,4.927,2.82,6.807  s4.149,2.82,6.807,2.82c2.658,0,4.926-0.94,6.807-2.82s2.821-4.149,2.821-6.807v-9.627h28.882v9.627  c0,2.658,0.939,4.927,2.819,6.807c1.881,1.88,4.149,2.82,6.807,2.82s4.927-0.94,6.808-2.82c1.879-1.88,2.82-4.149,2.82-6.807v-9.627  h19.253c1.255,0,2.332,0.414,3.235,1.241C953.086,869.187,953.612,870.202,953.763,871.405z M924.881,857.492v19.254  c0,1.304-0.476,2.432-1.429,3.385s-2.08,1.429-3.385,1.429c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.43-2.081-1.43-3.385  v-19.254c0-5.315-1.881-9.853-5.641-13.613c-3.76-3.761-8.298-5.641-13.613-5.641s-9.853,1.88-13.613,5.641  c-3.761,3.76-5.641,8.298-5.641,13.613v19.254c0,1.304-0.476,2.432-1.429,3.385c-0.953,0.953-2.081,1.429-3.385,1.429  c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.429-2.081-1.429-3.385v-19.254c0-7.973,2.821-14.779,8.461-20.42  c5.641-5.641,12.448-8.461,20.42-8.461c7.973,0,14.779,2.82,20.42,8.461C922.062,842.712,924.881,849.519,924.881,857.492z"
            ></path>
          </svg>
        </span>

        {/* <span
          className="bg-white p-3 absolute top-6 left-[2rem] text-black text-[1rem]
         lg:text-[1.5rem] lg:left-[15rem] lg:top-9 md:left-[4rem] md:top-5"
        >
          Add To Cart
        </span> */}
      </div>
      <div>
        <h2 className="text-[2rem] font-Lr ">NEXATONE HEADSETS</h2>
        <p className="text-[1.3rem] font-M">
          <span className="text-[1.3rem] text-[#666666] font-bold line-through">
            $270.00
          </span>
          <span className="text-[1.3rem] ml-1">$270.00</span>
        </p>
      </div>
    </div>
  );
}
