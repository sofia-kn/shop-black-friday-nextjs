"use client";
import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ProductCard from "../components/elements/ProductCard";
import PaginationControls from "../components/elements/PaginationControls";
import axios from "axios";

export default function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "8";
  const start = (Number(page) - 1) * Number(per_page); //0, 5, 10....
  const end = start + Number(per_page); //5, 10, 15....
  const [data, setData] = React.useState([]);

  const entries = data.slice(start, end);
  // console.log(entries);

  const axiosGet = async () => {
    //it rendered many times
    axios
      .get("https://api.jsonbin.io/v3/b/65f81c611f5677401f3f2e29")
      .then((res) => setData(res.data.record));
  };
  React.useEffect(() => {
    axiosGet();
  }, []);
  return (
    <>
      <div className="absolute bottom-[50%] top-[10%] flex w-full flex-col justify-center items-center  px-2">
        <h1 className="text-[5.6rem] lg:text-[10rem] lg-max:text-[11rem]  leading-[5.1rem] lg:leading-[9rem] lg-max:leading-[10rem] tracking-[0] font-Lr font-normal uppercase ">
          shop
        </h1>
        <div className="flex justify-center items-center mt-5">
          <span className="text-[1.5rem] text-[#FC3746]">Home</span>
          <span className="mx-2">
            <NavigateNextIcon />
          </span>
          <span className="text-[1.5rem]">Shop</span>
        </div>
      </div>

      <main className="flex flex-col items-center justify-between relative lg:mt-[5rem] customContainer">
        <div className=" mt-[-38rem]">
          <span className="text-[1.5rem] text-gray-300">
            {page === "1"
              ? "Showing 1–8 of 16 results"
              : "Showing 9–16 of 16 results"}
          </span>
          <div className="grid grid-cols-2 grid-rows-4 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-4 lg:grid-rows-2 gap-8 mt-[3rem]">
            {entries.map((entry: any) => (
            
                <ProductCard
                  key={entry.id}
                  offer={entry.offer}
                  image={entry.image}
                  realPrice={entry.realPrice}
                  offerPrice={entry.offerPrice}
                  title={entry.title}
                />
              
            ))}
          </div>
          <div className="flex  gap-2 items-center text-[2rem] mt-[7rem] mb-[1rem]">
            <PaginationControls
              hasNextPage={end < data.length}
              hasPrevPage={start > 0}
            />
          </div>
        </div>
      </main>
    </>
  );
}
