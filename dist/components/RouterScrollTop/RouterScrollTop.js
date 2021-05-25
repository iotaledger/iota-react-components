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
exports.RouterScrollTop = void 0;
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var scrollHelper_1 = require("../../utils/scrollHelper");
/**
 * Component to scroll to the top of the page on router navigate.
 */
var RouterScrollTopWithoutRouter = /** @class */ (function (_super) {
    __extends(RouterScrollTopWithoutRouter, _super);
    function RouterScrollTopWithoutRouter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * The component updated.
     * @param prevProps The Previous props.
     */
    RouterScrollTopWithoutRouter.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.location !== prevProps.location) {
            scrollHelper_1.ScrollHelper.scrollRoot();
        }
    };
    /**
     * Render the component.
     * @returns The node to render.
     */
    RouterScrollTopWithoutRouter.prototype.render = function () {
        return null;
    };
    return RouterScrollTopWithoutRouter;
}(react_1.default.Component));
// eslint-disable-next-line @typescript-eslint/naming-convention
exports.RouterScrollTop = react_router_dom_1.withRouter(RouterScrollTopWithoutRouter);
