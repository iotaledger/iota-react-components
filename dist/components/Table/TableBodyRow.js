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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableBodyRow = void 0;
var react_1 = __importDefault(require("react"));
/**
 * Component to create a TableBodyRow.
 */
var TableBodyRow = /** @class */ (function (_super) {
    __extends(TableBodyRow, _super);
    function TableBodyRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Render the component.
     * @returns The node to render.
     */
    TableBodyRow.prototype.render = function () {
        return (react_1.default.createElement("tr", { className: "table-body-row" }, this.props.children));
    };
    return TableBodyRow;
}(react_1.default.PureComponent));
exports.TableBodyRow = TableBodyRow;
