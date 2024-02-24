"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
function Timer() {
    var _a = (0, react_1.useState)(false), partyTime = _a[0], setPartyTime = _a[1];
    var _b = (0, react_1.useState)(0), timerDays = _b[0], setTimerDays = _b[1];
    var _c = (0, react_1.useState)(0), timerHours = _c[0], setTimerHours = _c[1];
    var _d = (0, react_1.useState)(0), timerMinutes = _d[0], setTimerMinutes = _d[1];
    var _e = (0, react_1.useState)(0), timerSeconds = _e[0], setTimerSeconds = _e[1];
    (0, react_1.useEffect)(function () {
        var target = new Date("05/25/2024 18:24:00");
        var interval = setInterval(function () {
            var now = new Date();
            var difference = target.getTime() - now.getTime();
            var d = Math.floor(difference / (1000 * 60 * 60 * 24));
            setTimerDays(d);
            var h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            setTimerHours(h);
            var m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            setTimerMinutes(m);
            var s = Math.floor((difference % (1000 * 60)) / 1000);
            setTimerSeconds(s);
            if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
                setPartyTime(true);
            }
        }, 1000);
        return function () { return clearInterval(interval); };
    });
    return (<>
      {partyTime ? (<h1>Happy new year</h1>) : (<div className="container w-full md:w-[65%] lg:w-[75%] flex justify-between mb-14 relative pr-[20px] pl-[20px]">
          <div className=" w-[75px] h-[100px] lg:w-[162px] lg:h-[162px] xl:w-[249px] xl:h-[249px] flex flex-col justify-center items-center border-[0.5px] border-[#ffffff59] ">
            <div className="flex w-[60px] lg:w-[100px] lg:h-[100px] xl:w-[165px] xl:h-[170px]">
              <div className="m-auto mt-[-1rem] lg:mt-[-2rem]  font-Lr text-[40px] lg:text-[85px] xl:text-[146px] ">
                {timerDays}
              </div>
            </div>
            <span className="font-M text-[10px] lg:text-sm">DAYS</span>
          </div>

          <div className="w-[75px] h-[100px] lg:w-[162px] lg:h-[162px] xl:w-[249px] xl:h-[249px]  flex flex-col justify-center items-center border-[0.5px] border-[#ffffff59] ">
            <div className="flex w-[60px] lg:w-[100px] lg:h-[100px] xl:w-[165px] xl:h-[170px]">
              <div className="m-auto mt-[-1rem] lg:mt-[-2rem]  font-Lr text-[40px] lg:text-[85px] xl:text-[146px] ">
                {timerHours}
              </div>
            </div>
            <span className="font-M text-[10px] lg:text-sm">HOURS</span>
          </div>

          <div className=" w-[75px] h-[100px] lg:w-[162px] lg:h-[162px] xl:w-[249px] xl:h-[249px]  flex flex-col justify-center items-center border-[0.5px] border-[#ffffff59] ">
            <div className="flex w-[60px] lg:w-[100px] lg:h-[100px] xl:w-[165px] xl:h-[170px]">
              <div className="m-auto mt-[-1rem] lg:mt-[-2rem]  font-Lr text-[40px] lg:text-[85px] xl:text-[146px] ">
                {timerMinutes}
              </div>
            </div>
            <span className="font-M text-[10px] lg:text-sm">MINUTES</span>
          </div>

          <div className=" w-[75px] h-[100px] lg:w-[162px] lg:h-[162px] xl:w-[249px] xl:h-[249px]  flex flex-col justify-center items-center border-[0.5px] border-[#ffffff59] ">
            <div className="flex w-[60px] lg:w-[100px] lg:h-[100px] xl:w-[165px] xl:h-[170px]">
              <div className="m-auto mt-[-1rem] lg:mt-[-2rem]  font-Lr text-[40px] lg:text-[85px] xl:text-[146px] ">
                {timerSeconds}
              </div>
            </div>
            <span className="font-M text-[10px] lg:text-sm">SECONDS</span>
          </div>
        </div>)}
    </>);
}
exports.default = Timer;
