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
Object.defineProperty(exports, "__esModule", { value: true });
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importDefault(require("react"));
/**
 * Component to display styled text.
 */
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Render the component.
     * @returns The node to render.
     */
    Text.prototype.render = function () {
        if (this.props.isHtml) {
            // tslint:disable-next-line:react-no-dangerous-html
            return react_1.default.createElement("span", { className: classnames_1.default("text", this.props.className), dangerouslySetInnerHTML: { __html: this.props.children } });
        }
        return (react_1.default.createElement("span", { className: classnames_1.default("text", this.props.className) }, this.props.children));
    };
    return Text;
}(react_1.default.PureComponent));
exports.Text = Text;
