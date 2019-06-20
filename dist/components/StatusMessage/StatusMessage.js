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
var Spinner_1 = require("../Spinner/Spinner");
var Success_1 = require("../Success/Success");
/**
 * Class to display a styled status message.
 */
var StatusMessage = /** @class */ (function (_super) {
    __extends(StatusMessage, _super);
    /**
     * Create a new instance of StatusMessage.
     * @param props The props.
     */
    function StatusMessage(props) {
        return _super.call(this, props) || this;
    }
    /**
     * Render the component.
     * @returns The node to render.
     */
    StatusMessage.prototype.render = function () {
        return this.props.status ? (react_1.default.createElement("div", { className: classnames_1.default("status-message", this.props.color) },
            this.props.isBusy && (react_1.default.createElement(Spinner_1.Spinner, null)),
            this.props.isSuccess && (react_1.default.createElement(Success_1.Success, null)),
            react_1.default.createElement("div", { className: "status" }, this.props.status.split("\n").map(function (s, idx) { return (react_1.default.createElement("span", { key: idx, dangerouslySetInnerHTML: { __html: s || "&nbsp;" } })); })))) : null;
    };
    return StatusMessage;
}(react_1.Component));
exports.StatusMessage = StatusMessage;
