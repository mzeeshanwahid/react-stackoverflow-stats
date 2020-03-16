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
exports.StackOverFlowStats = function (_a) {
    var className = _a.className, userId = _a.userId;
    var _b = react_1.useState([]), data = _b[0], setData = _b[1];
    react_1.useEffect(function () {
        fetch("https://api.stackexchange.com/2.2/users/" + userId + "?order=desc&sort=reputation&site=stackoverflow").then(function (response) { return response.json(); }).then(function (data) { return setData(data); });
    }, [userId]);
    return react_1.default.createElement("div", { className: className, style: {
            display: 'block',
            background: 'grey',
            margin: '10px',
            padding: '50px'
        } }, "Stats: " + data.toString());
};
exports.default = exports.StackOverFlowStats;
//# sourceMappingURL=StackOverFlowStats.js.map