"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importStar(require("react"));
require("./Alert.scss");
/**
 * Class to display a styled alert box.
 */
var Alert = /** @class */ (function (_super) {
    __extends(Alert, _super);
    /**
     * Create a new instance of Alert.
     * @param props The props.
     */
    function Alert(props) {
        return _super.call(this, props) || this;
    }
    /**
     * Render the component.
     * @returns The node to render.
     */
    Alert.prototype.render = function () {
        return (react_1.default.createElement(react_1.default.Fragment, null, this.props.status && (react_1.default.createElement("div", { className: classnames_1.default("alert", this.props.color) }, this.props.status.split("\n").map(function (s, idx) { return (react_1.default.createElement(react_1.default.Fragment, { key: idx },
            react_1.default.createElement("span", null, s),
            react_1.default.createElement("br", null))); })))));
    };
    return Alert;
}(react_1.Component));
exports.Alert = Alert;
