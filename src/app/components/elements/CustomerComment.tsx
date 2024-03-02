import * as React from 'react';
import GradeIcon from "@mui/icons-material/Grade";



export default function CustomerComment( comment:string, name:string, mt:number ) {
  return (
    <div>
      <div>
        <GradeIcon sx={{ color: "#f0ad4e" }} fontSize="large" />
        <GradeIcon sx={{ color: "#f0ad4e" }} fontSize="large" />
        <GradeIcon sx={{ color: "#f0ad4e" }} fontSize="large" />
        <GradeIcon sx={{ color: "#f0ad4e" }} fontSize="large" />
        <GradeIcon sx={{ color: "#f0ad4e" }} fontSize="large" />
      </div>
      <p className="text-[1.6rem] font-black font-M text-slate-300 my-[2rem]">
        {comment}
      </p>
      <span className="text-[1.4rem] font-M text-slate-300">{name}</span>
    </div>
  );
}
