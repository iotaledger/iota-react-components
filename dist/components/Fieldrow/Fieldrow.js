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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
/**
 * Class Fieldrow.
 */
var Fieldrow = /** @class */ (function (_super) {
    __extends(Fieldrow, _super);
    /**
     * Create a new instance of Fieldrow.
     * @param props The properties.
     * @param context The context.
     */
    function Fieldrow(props, context) {
        return _super.call(this, props, context) || this;
    }
    /**
     * Render the component.
     * @returns The node to render.
     */
    Fieldrow.prototype.render = function () {
        return (react_1.default.createElement("div", { className: "form--row" }, this.props.children));
    };
    return Fieldrow;
}(react_1.Component));
exports.Fieldrow = Fieldrow;
