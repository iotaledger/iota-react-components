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
var Heading_1 = require("../Heading/Heading");
var Link_1 = require("../Link/Link");
var Select_1 = require("../Select/Select");
var Text_1 = require("../Text/Text");
/**
 * Component to display styled footer.
 */
var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    function Footer(props) {
        return _super.call(this, props) || this;
    }
    /**
     * Render the component.
     * @returns The node to render.
     */
    Footer.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement("footer", { className: "footer" },
            react_1.default.createElement("div", { className: "footer__wrapper" },
                react_1.default.createElement("div", { className: "footer-top-content" }, this.props.sections.map(function (_a) {
                    var heading = _a.heading, links = _a.links;
                    return react_1.default.createElement("section", { key: heading, className: "footer-top-content__wrapper" },
                        react_1.default.createElement(Heading_1.Heading, { level: 3, className: "footer-top-content__heading" }, heading),
                        links.map(function (_a) {
                            var href = _a.href, text = _a.text;
                            return react_1.default.createElement(react_1.default.Fragment, { key: text },
                                react_1.default.createElement(Link_1.Link, { href: href, className: "footer-top-content__link", target: href.startsWith("http") ? "_blank" : "" }, text));
                        }));
                })),
                react_1.default.createElement("div", { className: "footer-top-content__dropdown-wrapper" },
                    react_1.default.createElement(Heading_1.Heading, { level: 3, className: "footer-top-content__heading" }, "Jump to a section"),
                    react_1.default.createElement(Select_1.Select, { onChange: function (e) { return _this.handleClick(e.target.value); }, className: "footer-top-content__dropdown" },
                        react_1.default.createElement("option", { value: "" }, "Select a topic"),
                        this.props.sections.map(function (_a) {
                            var heading = _a.heading, links = _a.links;
                            return react_1.default.createElement("optgroup", { key: heading, label: heading }, links.map(function (_a) {
                                var href = _a.href, text = _a.text;
                                return react_1.default.createElement("option", { key: text, value: href }, text);
                            }));
                        }))),
                react_1.default.createElement("div", { className: "footer-bottom-content" },
                    react_1.default.createElement("section", { className: "footer-bottom-content__wrapper" }, this.props.staticContent.address.map(function (text, idx) {
                        return react_1.default.createElement(Text_1.Text, { key: text, className: "footer-bottom-content__item", isHtml: true }, text);
                    })),
                    react_1.default.createElement("section", { className: "footer-bottom-content__wrapper legal" }, this.props.staticContent.legal.map(function (text, idx) {
                        return react_1.default.createElement(Text_1.Text, { key: text, className: "footer-bottom-content__item", isHtml: true }, text);
                    })),
                    react_1.default.createElement("section", { className: "footer-bottom-content__wrapper copyright" }, this.props.staticContent.copyright.map(function (text) {
                        return react_1.default.createElement(Text_1.Text, { key: text, className: "footer-bottom-content__item", isHtml: true }, text);
                    }))))));
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
    return Footer;
}(react_1.default.Component));
exports.Footer = Footer;
