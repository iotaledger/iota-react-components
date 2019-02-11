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
 * Component to create a Table.
 */
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    /**
     * Create a new instance of Table.
     * @param props The properties.
     */
    function Table(props) {
        return _super.call(this, props) || this;
    }
    /**
     * Render the component.
     * @returns The node to render.
     */
    Table.prototype.render = function () {
        return (react_1.default.createElement("table", { className: classnames_1.default("table", { "table--compact": this.props.compact }) }, this.props.children));
    };
    return Table;
}(react_1.default.PureComponent));
exports.Table = Table;
