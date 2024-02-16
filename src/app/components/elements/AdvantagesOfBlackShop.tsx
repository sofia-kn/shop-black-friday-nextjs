import * as React from 'react';

export default function AdvantagesOfBlackShop( icon:any, title:string, description:string) {
  return (
    <div className="flex flex-col">
      <span>{icon}</span>
      <h5 className="text-[2rem] lg:text-[2.5rem] font-Lr my-2">{title}</h5>
      <p className="text-[1.4rem] font-M text-slate-300">{description}</p>
    </div>
  );
}