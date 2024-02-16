"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Grade_1 = require("@mui/icons-material/Grade");
function CustomerComment(_a) {
    var comment = _a.comment, name = _a.name, mt = _a.mt;
    return (<div>
      <div>
        <Grade_1.default sx={{ color: "#f0ad4e" }} fontSize="large"/>
        <Grade_1.default sx={{ color: "#f0ad4e" }} fontSize="large"/>
        <Grade_1.default sx={{ color: "#f0ad4e" }} fontSize="large"/>
        <Grade_1.default sx={{ color: "#f0ad4e" }} fontSize="large"/>
        <Grade_1.default sx={{ color: "#f0ad4e" }} fontSize="large"/>
      </div>
      <p className="text-[1.6rem] font-black font-M text-slate-300 my-[2rem]">
        {comment}
      </p>
      <span className="text-[1.4rem] font-M text-slate-300">{name}</span>
    </div>);
}
exports.default = CustomerComment;
