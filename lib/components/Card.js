"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Card = function (data) {
    return (react_1.default.createElement("div", { className: "card" },
        react_1.default.createElement("div", { className: "additional" },
            react_1.default.createElement("div", { className: "user-card" },
                react_1.default.createElement("img", { src: data.profile_image }),
                react_1.default.createElement("div", { className: "points center" }, data.reputation)),
            react_1.default.createElement("div", { className: "more-info" },
                react_1.default.createElement("h1", null, data.display_name),
                react_1.default.createElement("div", { className: "coords" },
                    react_1.default.createElement("span", null, data.location),
                    react_1.default.createElement("span", null, data.link)),
                react_1.default.createElement("div", { className: "stats" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("div", { className: "title" }, "Today"),
                        react_1.default.createElement("i", { className: "fa fa-trophy" }),
                        react_1.default.createElement("div", { className: "value" }, data.reputation_change_day)),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("div", { className: "title" }, "Month"),
                        react_1.default.createElement("i", { className: "fa fa-gamepad" }),
                        react_1.default.createElement("div", { className: "value" }, data.reputation_change_month)),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("div", { className: "title" }, "Quarter"),
                        react_1.default.createElement("i", { className: "fa fa-group" }),
                        react_1.default.createElement("div", { className: "value" }, data.reputation_change_quarter)),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("div", { className: "title" }, "Year"),
                        react_1.default.createElement("i", { className: "fa fa-coffee" }),
                        react_1.default.createElement("div", { className: "value" }, data.reputation_change_year))))),
        react_1.default.createElement("div", { className: "general" },
            react_1.default.createElement("h1", null, data.display_name),
            data.tags.map(function (tag) {
                react_1.default.createElement("span", { className: "tag" }, tag);
            }),
            react_1.default.createElement("span", { className: "more" }, "Mouse over the card for more info"))));
};
exports.default = Card;
//# sourceMappingURL=Card.js.map