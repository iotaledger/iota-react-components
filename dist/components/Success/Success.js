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
exports.Success = void 0;
var react_1 = __importStar(require("react"));
var react_lottie_player_1 = __importDefault(require("react-lottie-player"));
var success_animation_json_1 = __importDefault(require("../../assets/success-animation.json"));
/**
 * Class to display a success animation.
 */
var Success = /** @class */ (function (_super) {
    __extends(Success, _super);
    function Success() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Render the component.
     * @returns The node to render.
     */
    Success.prototype.render = function () {
        var renderSettings = {
            viewBoxSize: "100 70 200 150"
        };
        return (react_1.default.createElement("div", { className: "success-wrapper" },
            react_1.default.createElement("div", { className: "success-icon" },
                react_1.default.createElement(react_lottie_player_1.default, { animationData: success_animation_json_1.default, rendererSettings: renderSettings, play: true, loop: false, style: {
                        width: 50,
                        height: 50
                    } })),
            this.props.message && (react_1.default.createElement("div", { className: "success-message" }, this.props.message.split("\n").map(function (s, idx) { return (react_1.default.createElement("span", { key: idx }, s)); })))));
    };
    return Success;
}(react_1.Component));
exports.Success = Success;
