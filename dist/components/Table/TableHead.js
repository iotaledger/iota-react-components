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
var react_1 = __importDefault(require("react"));
/**
 * Component to create a TableHead.
 */
var TableHead = /** @class */ (function (_super) {
    __extends(TableHead, _super);
    /**
     * Create a new instance of TableHead.
     * @param props The properties.
     */
    function TableHead(props) {
        return _super.call(this, props) || this;
    }
    /**
     * Render the component.
     * @returns The node to render.
     */
    TableHead.prototype.render = function () {
        return (react_1.default.createElement("thead", { className: "table-head" }, this.props.children));
    };
    return TableHead;
}(react_1.default.PureComponent));
exports.TableHead = TableHead;
