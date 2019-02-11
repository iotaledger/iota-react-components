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
var react_dom_1 = __importDefault(require("react-dom"));
// tslint:disable:react-no-dangerous-html
/**
 * Component to create a TableBodyRowData.
 */
var TableBodyRowData = /** @class */ (function (_super) {
    __extends(TableBodyRowData, _super);
    /**
     * Create a new instance of TableBodyRowData.
     * @param props The properties.
     */
    function TableBodyRowData(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            inlineHeader: ""
        };
        return _this;
    }
    /**
     * The component mounted.
     */
    TableBodyRowData.prototype.componentDidMount = function () {
        var thisDom = react_dom_1.default.findDOMNode(this);
        var tableRow = thisDom.parentElement;
        if (tableRow) {
            var myIndex = Array.from(tableRow.children).indexOf(thisDom);
            if (myIndex >= 0) {
                var table = thisDom.closest("table");
                if (table && table.tHead && table.tHead.rows && table.tHead.rows.length > 0) {
                    var row = table.tHead.rows[0];
                    if (row && row.children && row.children.length >= myIndex) {
                        this.setState({ inlineHeader: row.children[myIndex].innerHTML });
                    }
                }
            }
        }
    };
    /**
     * Render the component.
     * @returns The node to render.
     */
    TableBodyRowData.prototype.render = function () {
        return (react_1.default.createElement("td", { className: classnames_1.default("table-body-row--item", { "table-body-row-item--center": this.props.align === "center" }, { "table-body-row-item--right": this.props.align === "right" }) },
            this.state.inlineHeader && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("span", { className: "table-body-row-item--inline-header", dangerouslySetInnerHTML: { __html: this.state.inlineHeader } }),
                react_1.default.createElement("span", null, this.props.children))),
            !this.state.inlineHeader && this.props.children));
    };
    return TableBodyRowData;
}(react_1.default.PureComponent));
exports.TableBodyRowData = TableBodyRowData;
