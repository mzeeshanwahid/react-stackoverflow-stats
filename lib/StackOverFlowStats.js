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
    var _b = react_1.useState(null), error = _b[0], setError = _b[1];
    var _c = react_1.useState(), userData = _c[0], setUserData = _c[1];
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
        }
    }, [userId]);
    return (react_1.default.createElement("section", null, userData ? (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("span", null, userData.display_name),
        react_1.default.createElement("span", null, userData.location),
        react_1.default.createElement("span", null, userData.reputation),
        react_1.default.createElement("span", null, userData.badge_counts.bronze),
        react_1.default.createElement("span", null, userData.badge_counts.silver),
        react_1.default.createElement("span", null, userData.badge_counts.gold))) : react_1.default.createElement("span", null, "Loading ...")));
};
exports.default = exports.StackOverFlowStats;
//# sourceMappingURL=StackOverFlowStats.js.map