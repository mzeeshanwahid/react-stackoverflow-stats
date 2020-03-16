"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Card = function () {
    return (react_1.default.createElement("div", { className: "card" },
        react_1.default.createElement("div", { className: "additional" },
            react_1.default.createElement("div", { className: "user-card" },
                react_1.default.createElement("div", { className: "level center" }, "Level 13"),
                react_1.default.createElement("div", { className: "points center" }, "5,312 Points")),
            react_1.default.createElement("div", { className: "more-info" },
                react_1.default.createElement("h1", null, "Jane Doe"),
                react_1.default.createElement("div", { className: "coords" },
                    react_1.default.createElement("span", null, "Group Name"),
                    react_1.default.createElement("span", null, "Joined January 2019")),
                react_1.default.createElement("div", { className: "coords" },
                    react_1.default.createElement("span", null, "Position/Role"),
                    react_1.default.createElement("span", null, "City, Country")),
                react_1.default.createElement("div", { className: "stats" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("div", { className: "title" }, "Awards"),
                        react_1.default.createElement("i", { className: "fa fa-trophy" }),
                        react_1.default.createElement("div", { className: "value" }, "2")),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("div", { className: "title" }, "Matches"),
                        react_1.default.createElement("i", { className: "fa fa-gamepad" }),
                        react_1.default.createElement("div", { className: "value" }, "27")),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("div", { className: "title" }, "Pals"),
                        react_1.default.createElement("i", { className: "fa fa-group" }),
                        react_1.default.createElement("div", { className: "value" }, "123")),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("div", { className: "title" }, "Coffee"),
                        react_1.default.createElement("i", { className: "fa fa-coffee" }),
                        react_1.default.createElement("div", { className: "value infinity" }, "\u221E"))))),
        react_1.default.createElement("div", { className: "general" },
            react_1.default.createElement("h1", null, "Jane Doe"),
            react_1.default.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar."),
            react_1.default.createElement("span", { className: "more" }, "Mouse over the card for more info"))));
};
exports.default = Card;
//# sourceMappingURL=Card.js.map