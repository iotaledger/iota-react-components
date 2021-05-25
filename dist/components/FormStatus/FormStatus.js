"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormStatus = void 0;
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importStar(require("react"));
var Spinner_1 = require("../Spinner/Spinner");
var Success_1 = require("../Success/Success");
/**
 * Class FormStatus.
 */
var FormStatus = /** @class */ (function (_super) {
    __extends(FormStatus, _super);
    function FormStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
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
                react_1.default.createElement("div", { className: "form--status-message" }, this.props.message.split("\n").map(function (s, idx) { return (
                // tslint:disable-next-line:react-no-dangerous-html
                react_1.default.createElement("span", { key: idx, dangerouslySetInnerHTML: { __html: s || "&nbsp;" } })); }))))) : null;
    };
    return FormStatus;
}(react_1.Component));
exports.FormStatus = FormStatus;
