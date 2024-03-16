"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var NavigateNext_1 = require("@mui/icons-material/NavigateNext");
var ProductCard_1 = require("../components/elements/ProductCard");
var PaginationControls_1 = require("../components/elements/PaginationControls");
var data = [
    "entry 1",
    "entry 2",
    "entry 3",
    "entry 4",
    "entry 5",
    "entry 6",
    "entry 7",
    "entry 8",
    "entry 9",
    "entry 10",
];
function page(_a) {
    var _b, _c;
    var searchParams = _a.searchParams;
    var page = (_b = searchParams["page"]) !== null && _b !== void 0 ? _b : "1";
    var per_page = (_c = searchParams["per_page"]) !== null && _c !== void 0 ? _c : "5";
    var start = (Number(page) - 1) * Number(per_page); //0, 5, 10....
    var end = start + Number(per_page); //5, 10, 15....
    var entries = data.slice(start, end);
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
          <span className="text-[1.5rem] text-gray-300">
            Showing 1–8 of 16 results
          </span>
          <div className="grid grid-cols-2 grid-rows-2 gap-8 mt-[3rem]">
            {entries.map(function (entry) { return (<>
                <ProductCard_1.default />
                <ProductCard_1.default />
              </>
        // <p key={entry}>{entry}</p>
        ); })}
          </div>
          <div className="flex flex-col gap-2 items-center text-[2rem]">
            <PaginationControls_1.default hasNextPage={end < data.length} hasPrevPage={start > 0}/>
          </div>
        </div>
      </main>
    </>);
}
exports.default = page;
