"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var TestComponent = function () {
    var _a = react_1.useState(false), show = _a[0], setShow = _a[1];
    return show ? react_1.default.createElement("p", null, "Show: true") : react_1.default.createElement("p", null, "Show: false");
};
exports.default = TestComponent;
//# sourceMappingURL=TestComponent.js.map