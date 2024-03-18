"use client";
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var NavigateNext_1 = require("@mui/icons-material/NavigateNext");
var ProductCard_1 = require("../components/elements/ProductCard");
var PaginationControls_1 = require("../components/elements/PaginationControls");
var axios_1 = require("axios");
function page(_a) {
    var _this = this;
    var _b, _c;
    var searchParams = _a.searchParams;
    var page = (_b = searchParams["page"]) !== null && _b !== void 0 ? _b : "1";
    var per_page = (_c = searchParams["per_page"]) !== null && _c !== void 0 ? _c : "8";
    var start = (Number(page) - 1) * Number(per_page); //0, 5, 10....
    var end = start + Number(per_page); //5, 10, 15....
    var _d = react_1.default.useState([]), data = _d[0], setData = _d[1];
    var entries = data.slice(start, end);
    // console.log(entries);
    var axiosGet = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            //it rendered many times
            axios_1.default
                .get("https://api.jsonbin.io/v3/b/65f81c611f5677401f3f2e29")
                .then(function (res) { return setData(res.data.record); });
            return [2 /*return*/];
        });
    }); };
    react_1.default.useEffect(function () {
        axiosGet();
    }, []);
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
            {page === "1"
            ? "Showing 1–8 of 16 results"
            : "Showing 9–16 of 16 results"}
          </span>
          <div className="grid grid-cols-2 grid-rows-4 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-4 lg:grid-rows-2 gap-8 mt-[3rem]">
            {entries.map(function (entry) { return (<ProductCard_1.default key={entry.id} offer={entry.offer} image={entry.image} realPrice={entry.realPrice} offerPrice={entry.offerPrice} title={entry.title}/>); })}
          </div>
          <div className="flex  gap-2 items-center text-[2rem] mt-[7rem] mb-[1rem]">
            <PaginationControls_1.default hasNextPage={end < data.length} hasPrevPage={start > 0}/>
          </div>
        </div>
      </main>
    </>);
}
exports.default = page;
