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
 * Component to create a TableHeadRowHeader.
 */
var TableHeadRowHeader = /** @class */ (function (_super) {
    __extends(TableHeadRowHeader, _super);
    /**
     * Create a new instance of TableHeadRowHeader.
     * @param props The properties.
     */
    function TableHeadRowHeader(props) {
        return _super.call(this, props) || this;
    }
    /**
     * Render the component.
     * @returns The node to render.
     */
    TableHeadRowHeader.prototype.render = function () {
        return (react_1.default.createElement("th", { className: classnames_1.default("table-head-row--item", { "table-head-row-item--center": this.props.align === "center" }, { "table-head-row-item--right": this.props.align === "right" }) }, this.props.children));
    };
    return TableHeadRowHeader;
}(react_1.default.PureComponent));
exports.TableHeadRowHeader = TableHeadRowHeader;
