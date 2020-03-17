"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Tags = function (_a) {
    var tags = _a.tags;
    return react_1.default.createElement(react_1.default.Fragment, null, tags.map(function (tag) {
        react_1.default.createElement("span", { className: "tag" }, tag);
    }));
};
exports.default = Tags;
//# sourceMappingURL=Tags.js.map