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
var react_lottie_1 = __importDefault(require("react-lottie"));
var success_animation_json_1 = __importDefault(require("../../assets/success-animation.json"));
/**
 * Class to display a success animation.
 */
var Success = /** @class */ (function (_super) {
    __extends(Success, _super);
    /**
     * Create a new instance of Success.
     * @param props The props.
     */
    function Success(props) {
        return _super.call(this, props) || this;
    }
    /**
     * Render the component.
     * @returns The node to render.
     */
    Success.prototype.render = function () {
        var renderSettings = {
            viewBoxSize: "100 70 200 150"
        };
        var successOptions = {
            animationData: success_animation_json_1.default,
            loop: false,
            rendererSettings: renderSettings
        };
        return (react_1.default.createElement("div", { className: "success-wrapper" },
            react_1.default.createElement("div", { className: "success-icon" },
                react_1.default.createElement(react_lottie_1.default, { options: successOptions, width: 50, height: 50 })),
            this.props.message && (react_1.default.createElement("div", { className: "success-message" }, this.props.message.split("\n").map(function (s, idx) { return (react_1.default.createElement("span", { key: idx }, s)); })))));
    };
    return Success;
}(react_1.Component));
exports.Success = Success;
