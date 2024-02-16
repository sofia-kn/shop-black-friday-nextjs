"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
function RedButton(_a) {
    var textCenter = _a.textCenter, textLeft = _a.textLeft;
    return (<div className={"text-".concat(textCenter, " lg:text-").concat(textLeft)}>
      <button className="bg-[#fc3746] py-3 px-4 lg:py-4 lg:px-8 font-Lr">
        <a className="text-[2rem] tracking-[2px]">SHOP NOW</a>
      </button>
    </div>);
}
exports.default = RedButton;
