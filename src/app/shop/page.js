"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var NavigateNext_1 = require("@mui/icons-material/NavigateNext");
var ProductCard_1 = require("../components/elements/ProductCard");
function page() {
    return (<>
      <div className="absolute bottom-[50%] top-[10%] flex w-full flex-col justify-center items-center  px-2">
        <h1 className="text-[5.6rem] lg:text-[10rem] lg-max:text-[11rem]  leading-[5.1rem] lg:leading-[9rem] lg-max:leading-[10rem] tracking-[0] font-Lr font-normal uppercase ">
          shop
        </h1>
        <div className="flex justify-center items-center mt-5">
          <span className="text-[1.5rem] text-[#FC3746]">Home</span>
          <span className="mx-2">
            <NavigateNext_1.default />
          </span>
          <span className="text-[1.5rem]">Shop</span>
        </div>
      </div>

      <main className="flex flex-col items-center justify-between relative lg:mt-[5rem] customContainer">
        <div className=" mt-[-38rem]">
        <span className="text-[1.5rem] text-gray-300">Showing 1–8 of 16 results</span>
         <div className="grid grid-cols-2 gap-8 mt-[3rem]">
          <ProductCard_1.default />
          <ProductCard_1.default />
          <ProductCard_1.default />
          <ProductCard_1.default />
          <ProductCard_1.default />
          <ProductCard_1.default />
          <ProductCard_1.default />
          <ProductCard_1.default />
         </div>
        </div>
      </main>
    </>);
}
exports.default = page;
