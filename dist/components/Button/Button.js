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
/**
 * Class Button.
 */
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    /**
     * Create a new instance of Button.
     * @param props The properties.
     * @param context The context.
     */
    function Button(props, context) {
        return _super.call(this, props, context) || this;
    }
    /**
     * Render the component.
     * @returns The node to render.
     */
    Button.prototype.render = function () {
        var _a, _b;
        return (react_1.default.createElement("button", { className: classnames_1.default("button", (_a = {}, _a["button--" + this.props.color] = this.props.color, _a), (_b = {}, _b["button--" + this.props.size] = this.props.size && this.props.size !== "normal", _b), { "button--long": this.props.long }, { "button--no-case": this.props.disableCaseStyle }), onClick: this.props.onClick, disabled: this.props.disabled }, this.props.children));
    };
    return Button;
}(react_1.Component));
exports.Button = Button;
