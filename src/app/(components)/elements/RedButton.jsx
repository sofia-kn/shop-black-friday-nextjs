import React from "react";

export default function RedButton({textCenter, textLeft}) {
  return (
    <div className={`text-${textCenter} lg:text-${textLeft}`}>
      <button className="bg-[#fc3746] py-4 px-8 font-Lr">
        <a className="text-[2rem] tracking-[2px]">SHOP NOW</a>
      </button>
    </div>
  );
}
