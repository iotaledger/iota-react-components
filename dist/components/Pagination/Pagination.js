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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = void 0;
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importStar(require("react"));
/**
 * Class Pagination.
 */
var Pagination = /** @class */ (function (_super) {
    __extends(Pagination, _super);
    /**
     * Create a new instance of Pagination.
     * @param props The properties.
     */
    function Pagination(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            pages: _this.calculatePagination()
        };
        return _this;
    }
    /**
     * Handle the cick event.
     * @param page The page that was clicked.
     */
    Pagination.prototype.handleClick = function (page) {
        this.props.onChange(page);
    };
    /**
     * Render the component.
     * @returns The node to render.
     */
    Pagination.prototype.render = function () {
        var _this = this;
        return this.state.pages.length > 1 ? (react_1.default.createElement("ul", { className: "pagination" }, this.state.pages.map(function (p, idx) { return (react_1.default.createElement("li", { key: idx, className: classnames_1.default("pagination-item", { "pagination-item--selected": _this.props.page === p - 1 }) },
            p === -1 && (react_1.default.createElement("span", null, "...")),
            p !== -1 && (react_1.default.createElement("a", { onClick: function () { return _this.handleClick(p - 1); }, role: "button" }, p)))); }))) : null;
    };
    /**
     * Calculate the pagination numbers.
     * @returns The array of page numbers.
     */
    Pagination.prototype.calculatePagination = function () {
        var _a;
        var current = this.props.page;
        var last = this.props.totalPages;
        var delta = (_a = this.props.delta) !== null && _a !== void 0 ? _a : 2;
        var left = current - delta;
        var right = current + delta + 1;
        var range = [];
        var rangeWithDots = [];
        var l;
        for (var i = 1; i <= last; i++) {
            if (i === 1 || i === last || (i >= left && i < right)) {
                range.push(i);
            }
        }
        for (var _i = 0, range_1 = range; _i < range_1.length; _i++) {
            var i = range_1[_i];
            if (l) {
                if (i - l === 2) {
                    rangeWithDots.push(l + 1);
                }
                else if (i - l !== 1) {
                    rangeWithDots.push(-1);
                }
            }
            rangeWithDots.push(i);
            l = i;
        }
        return rangeWithDots;
    };
    return Pagination;
}(react_1.Component));
exports.Pagination = Pagination;
