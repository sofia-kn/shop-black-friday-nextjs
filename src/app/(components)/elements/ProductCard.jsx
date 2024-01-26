import Image from "next/image";
import React from "react";

export default function ProductCard() {
  return (
    <div className="flex-grow basis-3">
      <div>
        <Image
          src="/assets/images/7-product-400x463.jpg"
          width={338}
          height={339}
          alt="image"
          // sizes="100vw"
          // style={{ width: "50%", height: "auto" }}
        />
      </div>
      <div>
        <h2 className="text-[2rem] font-Lr ">NEXATONE HEADSETS</h2>
        <p className="text-[1.3rem] font-M">
          <span className="text-[1.3rem] text-[#666666] font-bold">$270.00</span>
          <span className="text-[1.3rem] ml-1">$270.00</span>
        </p>
      </div>
    </div>
  );
}
