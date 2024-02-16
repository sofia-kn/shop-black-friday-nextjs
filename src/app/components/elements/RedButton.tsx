import * as React from 'react';

export default function RedButton(textCenter:any) {
  return (
    <div className={`text-${textCenter}`}>
      <button className="bg-[#fc3746] py-3 px-4 lg:py-4 lg:px-8 font-Lr">
        <a className="text-[2rem] tracking-[2px]">SHOP NOW</a>
      </button>
    </div>
  );
}
