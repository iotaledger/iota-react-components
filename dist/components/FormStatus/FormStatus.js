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
 * Class FormStatus.
 */
var FormStatus = /** @class */ (function (_super) {
    __extends(FormStatus, _super);
    /**
     * Create a new instance of FormStatus.
     * @param props The properties.
     * @param context The context.
     */
    function FormStatus(props, context) {
        return _super.call(this, props, context) || this;
    }
    /**
     * Render the component.
     * @returns The node to render.
     */
    FormStatus.prototype.render = function () {
        return this.props.message ? (react_1.default.createElement("div", { className: "form--status" },
            !this.props.fullWidth && (react_1.default.createElement("label", null)),
            react_1.default.createElement("div", { className: classnames_1.default("form--status-content", { "form--status-content__error": this.props.isError }) },
                this.props.isBusy && (react_1.default.createElement(Spinner_1.Spinner, null)),
                this.props.isSuccess && (react_1.default.createElement(Success_1.Success, null)),
                react_1.default.createElement("div", { className: "form--status-message" }, this.props.message.split("\n").map(function (s, idx) { return (react_1.default.createElement("span", { key: idx, dangerouslySetInnerHTML: { __html: s || "&nbsp;" } })); }))))) : null;
    };
    return FormStatus;
}(react_1.Component));
exports.FormStatus = FormStatus;
