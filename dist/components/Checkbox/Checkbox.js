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
 * Class Checkbox.
 */
var Checkbox = /** @class */ (function (_super) {
    __extends(Checkbox, _super);
    /**
     * Create a new instance of Checkbox.
     * @param props The properties.
     * @param context The context.
     */
    function Checkbox(props, context) {
        return _super.call(this, props, context) || this;
    }
    /**
     * Render the component.
     * @returns The node to render.
     */
    Checkbox.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement("div", { className: classnames_1.default("checkbox", { checkbox__disabled: this.props.disabled }) },
            react_1.default.createElement("div", { className: "checkbox-border" },
                react_1.default.createElement("input", { type: "checkbox", checked: this.props.checked, disabled: this.props.disabled, onChange: function (e) { return _this.props.onChange && _this.props.onChange(e.target.checked); } })),
            react_1.default.createElement("label", null, this.props.label)));
    };
    return Checkbox;
}(react_1.Component));
exports.Checkbox = Checkbox;
