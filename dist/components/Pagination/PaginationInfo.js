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
 * Class PaginationInfo.
 */
var PaginationInfo = /** @class */ (function (_super) {
    __extends(PaginationInfo, _super);
    /**
     * Create a new instance of PaginationInfo.
     * @param props The properties.
     * @param context The context.
     */
    function PaginationInfo(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = {
            pageInfo: _this.calculatePaginationInfo()
        };
        return _this;
    }
    /**
     * Render the component.
     * @returns The node to render.
     */
    PaginationInfo.prototype.render = function () {
        return (react_1.default.createElement("div", { className: "pagination-info" },
            react_1.default.createElement("div", { className: "pagination-info--text" }, this.state.pageInfo),
            this.props.children));
    };
    /**
     * Calculate the pagination info for the pages.
     * @returns The pagination info.
     */
    PaginationInfo.prototype.calculatePaginationInfo = function () {
        var totalPages = Math.ceil(this.props.totalItems / this.props.pageSize);
        var itemsOnPage;
        if (this.props.page === totalPages - 1) {
            itemsOnPage = this.props.totalItems % this.props.pageSize;
            if (itemsOnPage === 0) {
                itemsOnPage = this.props.pageSize;
            }
        }
        else {
            itemsOnPage = this.props.pageSize;
        }
        var firstItem = (this.props.page * this.props.pageSize) + 1;
        var lastItem = (this.props.page * this.props.pageSize) + itemsOnPage;
        return this.props.totalItems > 0 ?
            "Items " + firstItem + " to " + lastItem + " of " + this.props.totalItems
            : "No Items";
    };
    return PaginationInfo;
}(react_1.Component));
exports.PaginationInfo = PaginationInfo;
