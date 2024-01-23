import React from "react";

export default function RedButton({textCenter}) {
  return (
    <div className={`text-${textCenter} lg:text-left`}>
      <button className="bg-[#fc3746] pt-3 pb-3 pl-5 pr-5 font-Lr">
        <a className="text-lg tracking-[2px]">SHOP NOW</a>
      </button>
    </div>
  );
}
