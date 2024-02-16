"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
function AdvantagesOfBlackShop(_a) {
    var icon = _a.icon, title = _a.title, description = _a.description;
    return (<div className="flex flex-col">
      <span>{icon}</span>
      <h5 className="text-[2rem] lg:text-[2.5rem] font-Lr my-2">{title}</h5>
      <p className="text-[1.4rem] font-M text-slate-300">{description}</p>
    </div>);
}
exports.default = AdvantagesOfBlackShop;
