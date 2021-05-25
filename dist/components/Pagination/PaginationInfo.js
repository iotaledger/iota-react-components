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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationInfo = void 0;
var react_1 = __importStar(require("react"));
/**
 * Class PaginationInfo.
 */
var PaginationInfo = /** @class */ (function (_super) {
    __extends(PaginationInfo, _super);
    /**
     * Create a new instance of PaginationInfo.
     * @param props The properties.
     */
    function PaginationInfo(props) {
        var _this = _super.call(this, props) || this;
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
        return this.props.totalItems > 0
            ? "Items " + firstItem + " to " + lastItem + " of " + this.props.totalItems
            : "No Items";
    };
    return PaginationInfo;
}(react_1.Component));
exports.PaginationInfo = PaginationInfo;
