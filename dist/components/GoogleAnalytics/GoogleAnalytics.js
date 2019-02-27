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
 * Component to add a google analytics link.
 */
var GoogleAnalytics = /** @class */ (function (_super) {
    __extends(GoogleAnalytics, _super);
    function GoogleAnalytics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Render the component.
     * @returns The node to render.
     */
    GoogleAnalytics.prototype.render = function () {
        if (!this.props.id) {
            return null;
        }
        var src = "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', '" + this.props.id + "');\n";
        // tslint:disable:react-no-dangerous-html
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("script", { async: true, src: "https://www.googletagmanager.com/gtag/js?id=" + this.props.id }),
            react_1.default.createElement("script", { dangerouslySetInnerHTML: { __html: src } })));
    };
    return GoogleAnalytics;
}(react_1.default.PureComponent));
exports.GoogleAnalytics = GoogleAnalytics;
