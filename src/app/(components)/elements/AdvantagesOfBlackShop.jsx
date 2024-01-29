import React from "react";

export default function AdvantagesOfBlackShop({title, description}) {
  return (
    <div className="bg-yellow-500 flex flex-col">
      <span className="text-[1.5rem]">icon</span>
      <h5 className="text-[2rem] font-Lr">{title}</h5>
      <p className="text-[1.5rem] font-M text-slate-100">
{description}
      </p>
    </div>
  );
}
