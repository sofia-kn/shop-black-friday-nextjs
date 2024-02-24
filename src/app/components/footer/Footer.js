"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var link_1 = require("next/link");
var Footer = function () {
    return (<div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center border-t-[0.5px] text-center px-[4rem] py-[4rem] lg:px-[3rem] lg:py-[3rem] xl:px-[5rem] xl:py-8 border-gray-600 font-M">
      <p className="text-2xl text-slate-300">
        Copyright © 2024 Black Friday | Powered by Black Friday
      </p>
      <div className="flex flex-col justify-center items-center mt-8 xl:flex-row xl:mt-0">
        <div className="cursor-pointer hover:bg-black hover:text-red-600 items-center text-3xl text-slate-300 xl:px-[1rem] xl:text-4xl">
          <link_1.default href="#">HOME</link_1.default>
        </div>
        <div className="cursor-pointer hover:bg-black hover:text-red-600 items-center text-3xl text-slate-300 xl:px-[1rem] xl:text-4xl">
          <link_1.default href="#">SHOP</link_1.default>
        </div>
        <div className="cursor-pointer hover:bg-black hover:text-red-600 items-center text-3xl text-slate-300 xl:px-[1rem] xl:text-4xl">
          <link_1.default href="#">ABOUT</link_1.default>
        </div>
        <div className="cursor-pointer hover:bg-black hover:text-red-600 items-center text-3xl text-slate-300 xl:px-[1rem] xl:text-4xl">
          <link_1.default href="#">CONTACT</link_1.default>
        </div>
      </div>
    </div>);
};
exports.default = Footer;
