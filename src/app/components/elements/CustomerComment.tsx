"use client";

import GradeIcon from "@mui/icons-material/Grade";
import { FC } from "react";

interface CustomerCommentProps {
  comment: string;
  name: string;
}

const CustomerComment: FC<CustomerCommentProps> = ({ comment, name }) => {
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
};

export default CustomerComment;
