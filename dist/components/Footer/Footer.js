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
exports.Footer = void 0;
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var foundationDataHelper_1 = require("../../utils/foundationDataHelper");
var Heading_1 = require("../Heading/Heading");
var Link_1 = require("../Link/Link");
var Select_1 = require("../Select/Select");
var Text_1 = require("../Text/Text");
/**
 * Component to display styled footer.
 */
var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    /**
     * Create a new instance of Footer.
     * @param props The properties.
     */
    function Footer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            footerSections: _this.buildFooterSections(props)
        };
        return _this;
    }
    /**
     * The component updated so rebuild the display.
     * @param prevProps The previous properties.
     */
    Footer.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.foundationData !== prevProps.foundationData) {
            this.setState({
                footerSections: this.buildFooterSections(this.props)
            });
        }
    };
    /**
     * Render the component.
     * @returns The node to render.
     */
    Footer.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement("footer", { className: "footer" },
            react_1.default.createElement("div", { className: "footer__wrapper" },
                react_1.default.createElement("div", { className: "footer-top-content" }, this.state.footerSections.map(function (_a) {
                    var heading = _a.heading, links = _a.links;
                    return (react_1.default.createElement("section", { key: heading, className: "footer-top-content__wrapper" },
                        react_1.default.createElement(Heading_1.Heading, { level: 3, className: "footer-top-content__heading" }, heading),
                        links.map(function (_a) {
                            var href = _a.href, text = _a.text;
                            return (react_1.default.createElement(react_1.default.Fragment, { key: text },
                                href.startsWith("http") && (react_1.default.createElement(Link_1.Link, { href: href, className: "footer-top-content__link", target: "_blank" }, text)),
                                !href.startsWith("http") && (react_1.default.createElement(react_router_dom_1.Link, { to: href, className: "footer-top-content__link" }, text))));
                        })));
                })),
                react_1.default.createElement("div", { className: "footer-top-content__dropdown-wrapper" },
                    react_1.default.createElement(Heading_1.Heading, { level: 3, className: "footer-top-content__heading" }, "Jump to a section"),
                    react_1.default.createElement(Select_1.Select, { onChange: function (e) { return _this.handleClick(e.target.value); }, className: "footer-top-content__dropdown" },
                        react_1.default.createElement("option", { value: "" }, "Select a section"),
                        this.state.footerSections.map(function (_a) {
                            var heading = _a.heading, links = _a.links;
                            return (react_1.default.createElement("optgroup", { key: heading, label: heading }, links.map(function (_a) {
                                var href = _a.href, text = _a.text;
                                return react_1.default.createElement("option", { key: text, value: href }, text);
                            })));
                        }))),
                react_1.default.createElement("div", { className: "footer-bottom-content" },
                    this.props.foundationData && (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement("section", { className: "footer-bottom-content__wrapper" }, this.props.foundationData.registeredAddress.value.map(function (text, idx) { return (react_1.default.createElement(Text_1.Text, { key: idx, className: "footer-bottom-content__item", isHtml: true }, text)); })),
                        react_1.default.createElement("section", { className: "footer-bottom-content__wrapper" }, this.props.foundationData.information.map(function (item, idx) { return (react_1.default.createElement("span", { key: idx, className: "text footer-bottom-content__item" }, foundationDataHelper_1.FoundationDataHelper.createValue(item))); })))),
                    this.props.staticContent && (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement("section", { className: "footer-bottom-content__wrapper" }, this.props.staticContent.address.map(function (text, idx) { return (react_1.default.createElement(Text_1.Text, { key: text, className: "footer-bottom-content__item", isHtml: true }, text)); })),
                        react_1.default.createElement("section", { className: "footer-bottom-content__wrapper legal" }, this.props.staticContent.legal.map(function (text, idx) { return (react_1.default.createElement(Text_1.Text, { key: text, className: "footer-bottom-content__item", isHtml: true }, text)); })),
                        react_1.default.createElement("section", { className: "footer-bottom-content__wrapper copyright" }, this.props.staticContent.copyright.map(function (text) { return (react_1.default.createElement(Text_1.Text, { key: text, className: "footer-bottom-content__item", isHtml: true }, text)); }))))))));
    };
    /**
     * Handle the click from the select element in mobile view.
     * @param url The url to handle.
     */
    Footer.prototype.handleClick = function (url) {
        if (url.startsWith("http")) {
            window.open(url, "_blank");
        }
        else {
            this.props.history.push(url);
        }
    };
    /**
     * Build the footer sections to display.
     * @param props The props.
     * @returns The footer sections.
     */
    Footer.prototype.buildFooterSections = function (props) {
        var _a;
        var footerSections = [];
        if (props.sections) {
            footerSections = footerSections.concat(props.sections);
        }
        if ((_a = props.foundationData) === null || _a === void 0 ? void 0 : _a.footerSections) {
            for (var _i = 0, _b = props.foundationData.footerSections; _i < _b.length; _i++) {
                var section = _b[_i];
                footerSections.push({
                    heading: section.label,
                    links: section.items.map(function (i) { return ({
                        href: i.url,
                        text: i.label
                    }); })
                });
            }
        }
        return footerSections;
    };
    return Footer;
}(react_1.default.Component));
exports.Footer = Footer;
