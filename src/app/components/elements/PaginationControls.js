"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var navigation_1 = require("next/navigation");
var PaginationControls = function (_a) {
    var _b, _c;
    var hasNextPage = _a.hasNextPage, hasPrevPage = _a.hasPrevPage;
    var router = (0, navigation_1.useRouter)();
    var searchParams = (0, navigation_1.useSearchParams)();
    var page = (_b = searchParams.get("page")) !== null && _b !== void 0 ? _b : "1";
    var per_page = (_c = searchParams.get("per_page")) !== null && _c !== void 0 ? _c : "8";
    return (<div className="flex gap-2">
      <button className="borderRed px-[1.5rem] py-[0.5rem] text-white text-[1.5rem] bg-red-500" disabled={!hasPrevPage} onClick={function () {
            router.push("shop/?page=".concat(Number(page) - 1, "&per_page=").concat(per_page));
        }}>
        1
      </button>
      <button className="borderRed px-[1.5rem] py-[0.5rem] text-[#FF4955] text-[1.5rem] hover:bg-red-500 hover:text-white" disabled={!hasNextPage} onClick={function () {
            router.push("shop/?page=".concat(Number(page) + 1, "&per_page=").concat(per_page));
        }}>
        2
      </button>
      <button className="borderRed px-[1.3rem] py-[0.5rem] text-[#FF4955] text-[1.5rem] hover:bg-red-500 hover:text-white">
        →
      </button>
    </div>);
};
exports.default = PaginationControls;
