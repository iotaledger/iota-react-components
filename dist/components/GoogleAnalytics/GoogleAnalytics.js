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
exports.GoogleAnalytics = exports.GoogleAnalyticsWithoutRouter = void 0;
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
/**
 * Component to add a google analytics link.
 */
var GoogleAnalyticsWithoutRouter = /** @class */ (function (_super) {
    __extends(GoogleAnalyticsWithoutRouter, _super);
    function GoogleAnalyticsWithoutRouter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * The component mounted.
     */
    GoogleAnalyticsWithoutRouter.prototype.componentDidMount = function () {
        var _this = this;
        this.props.history.listen(function (location) { return _this.pageView(location); });
    };
    /**
     * The component updated so load the script if the id is set.
     * @param prevProps The previous properties.
     */
    GoogleAnalyticsWithoutRouter.prototype.componentDidUpdate = function (prevProps) {
        var _this = this;
        if (this.props.id !== prevProps.id &&
            this.props.id &&
            this.props.id.trim().length > 0 &&
            this.props.id !== "GOOGLE-ANALYTICS-ID") {
            var scriptGtag = document.createElement("script");
            scriptGtag.text = "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\n";
            document.body.append(scriptGtag);
            var script = document.createElement("script");
            script.addEventListener("load", function () {
                _this.pageView(_this.props.location);
            });
            script.async = true;
            script.src = "https://www.googletagmanager.com/gtag/js?id=" + this.props.id;
            document.body.append(script);
        }
    };
    /**
     * Render the component.
     * @returns The node to render.
     */
    GoogleAnalyticsWithoutRouter.prototype.render = function () {
        return null;
    };
    /**
     * Log a page view to the analytics.
     * @param location The location to log.
     */
    GoogleAnalyticsWithoutRouter.prototype.pageView = function (location) {
        if (this.props.id) {
            var newLocation = location.pathname + location.search + location.hash;
            if (newLocation !== this._lastSent) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                var gtag = window.gtag;
                if (typeof gtag === "function") {
                    // eslint-disable-next-line camelcase
                    gtag("config", this.props.id, { page_path: newLocation });
                }
                this._lastSent = newLocation;
            }
        }
    };
    return GoogleAnalyticsWithoutRouter;
}(react_1.default.Component));
exports.GoogleAnalyticsWithoutRouter = GoogleAnalyticsWithoutRouter;
// eslint-disable-next-line @typescript-eslint/naming-convention
exports.GoogleAnalytics = react_router_dom_1.withRouter(GoogleAnalyticsWithoutRouter);
