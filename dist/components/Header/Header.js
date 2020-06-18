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
 * Component to display a styled header.
 */
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            topLinks: _this.buildTopLinks(props)
        };
        return _this;
    }
    /**
     * The component updated so rebuild the display.
     * @param prevProps The previous properties.
     */
    Header.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.foundationData !== prevProps.foundationData) {
            this.setState({
                topLinks: this.buildTopLinks(this.props)
            });
        }
    };
    /**
     * Render the component.
     * @returns The node to render.
     */
    Header.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement("header", { className: classnames_1.default("header", { compact: this.props.compact }) },
            react_1.default.createElement("div", { className: "header__wrapper" },
                react_1.default.createElement("section", { className: "header__head" },
                    react_1.default.createElement("a", { href: "/" },
                        react_1.default.createElement("img", { className: "header__brand", src: this.props.logo, alt: "IOTA" })),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("div", { className: "top-header" },
                            react_1.default.createElement("ul", { className: "top-header__items" }, this.state.topLinks.map(function (title, index) {
                                return (react_1.default.createElement("li", { key: index, className: "top-header__item" },
                                    react_1.default.createElement("a", { href: title.href, target: "_blank", rel: "noopener noreferrer" }, title.text)));
                            }))),
                        this.props.hamburgerClick && (react_1.default.createElement("button", { className: classnames_1.default("header__icon", this.props.hamburgerMediaQuery), onClick: function () { return _this.props.hamburgerClick && _this.props.hamburgerClick(); } })))),
                react_1.default.createElement("section", { className: "header__body" },
                    react_1.default.createElement("span", { className: "header__title text text--level1 text--secondary" }, this.props.title),
                    this.props.children))));
    };
    /**
     * Build the top links from data or foundation.
     * @param props The props.
     * @returns The top header links.
     */
    Header.prototype.buildTopLinks = function (props) {
        return props.topLinks ? props.topLinks :
            props.foundationData && props.foundationData.sites ?
                props.foundationData.sites.map(function (s) { return ({
                    text: s.label,
                    href: s.url
                }); }) : [];
    };
    return Header;
}(react_1.default.Component));
exports.Header = Header;
