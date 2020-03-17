"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Card_1 = __importDefault(require("./components/Card"));
exports.StackOverFlowStats = function (_a) {
    var className = _a.className, userId = _a.userId;
    var _b = react_1.useState(null), error = _b[0], setError = _b[1];
    var _c = react_1.useState(), userData = _c[0], setUserData = _c[1];
    var _d = react_1.useState(), tags = _d[0], setTags = _d[1];
    react_1.useEffect(function () {
        if (userId) {
            fetch("https://api.stackexchange.com/2.2/users/" + userId + "?order=desc&sort=reputation&site=stackoverflow")
                .then(function (response) { return response.json(); })
                .then(function (data) {
                // if (data.error_id) setError("Error: Provide a valid userId as prop");
                if (data.items)
                    setUserData(data.items[0]);
                console.log("Dataa", data.items[0]);
            });
            fetch("https://api.stackexchange.com/2.2/users/" + userId + "/tags?order=desc&sort=popular&site=stackoverflow").then(function (response) { return response.json(); }).then(function (data) {
                if (data.items) {
                    var tags_1 = data.items.slice(0, 5).map(function (chunk) { return chunk.name; });
                    setTags(tags_1);
                }
            });
        }
    }, [userId]);
    return (react_1.default.createElement("section", null, userData && tags ? (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Card_1.default, __assign({}, userData, { tags: tags })))) : react_1.default.createElement("span", null, "Loading ...")));
};
exports.default = exports.StackOverFlowStats;
//# sourceMappingURL=StackOverFlowStats.js.map