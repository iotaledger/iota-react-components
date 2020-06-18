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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importDefault(require("react"));
/**
 * Component to display a styled side menu.
 */
var SideMenu = /** @class */ (function (_super) {
    __extends(SideMenu, _super);
    /**
     * Create a new instance of SideMenu.
     * @param props The props.
     */
    function SideMenu(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            items: _this.createStateItems()
        };
        _this._handleKeyDown = function (event) { return _this.handleKeyDown(event); };
        return _this;
    }
    /**
     * The component mounted.
     */
    SideMenu.prototype.componentDidMount = function () {
        document.addEventListener("keydown", this._handleKeyDown, false);
    };
    /**
     * The component will unmount from the dom.
     */
    SideMenu.prototype.componentWillUnmount = function () {
        document.removeEventListener("keydown", this._handleKeyDown, false);
    };
    /**
     * The component will receive properties.
     * @param nextProps The next props.
     */
    SideMenu.prototype.componentWillReceiveProps = function (nextProps) {
        document.body.classList.toggle("no-scroll", nextProps.isMenuOpen);
    };
    /**
     * The component updates.
     * @param prevProps The previous props.
     */
    SideMenu.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.selectedItemLink !== prevProps.selectedItemLink) {
            this.setState({
                items: this.createStateItems()
            });
        }
    };
    /**
     * Render the component.
     * @returns The node to render.
     */
    SideMenu.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement("div", { className: this.props.mediaQuery },
            this.props.isMenuOpen && (react_1.default.createElement("div", { className: "side-menu__overlay", onClick: function () { return _this.handleCloseClick(); }, role: "button" })),
            react_1.default.createElement("section", { className: classnames_1.default("side-menu", { "side-menu__shown": this.props.isMenuOpen }, { "side-menu__hidden": !this.props.isMenuOpen }) },
                react_1.default.createElement("h4", { className: "side-menu__caption" },
                    react_1.default.createElement("span", null, "Navigation"),
                    react_1.default.createElement("button", { className: "side-menu__close", onClick: function () { return _this.handleCloseClick(); } })),
                this.state.items.map(function (menuItem, index) { return (react_1.default.createElement("section", { key: index, className: classnames_1.default("side-menu__group", { "side-menu__group--expanded": menuItem.isExpanded }, { "side-menu__group--selected": menuItem.isSelected }) },
                    react_1.default.createElement("h5", { className: "side-menu__heading", onClick: function () { return _this.handleHeadingClick(index); } },
                        react_1.default.createElement("span", null, menuItem.name)),
                    react_1.default.createElement("div", { className: "side-menu__list" }, menuItem.items && menuItem.items.map(function (menuListItem, miIndex) { return (react_1.default.createElement(react_1.default.Fragment, { key: miIndex },
                        react_1.default.createElement("div", { className: "side-menu__sub-list" },
                            menuListItem.name && (react_1.default.createElement("div", { className: "side-menu-item__header" }, menuListItem.name)),
                            react_1.default.createElement("ul", null, menuListItem.items && menuListItem.items.map(function (subItem, idx) { return (react_1.default.createElement("li", { key: idx, className: classnames_1.default("side-menu-item", { "side-menu-item--active": subItem.isSelected }) },
                                react_1.default.createElement("a", { onClick: function () { return _this.handleClick(subItem.link); }, className: classnames_1.default({ "side-menu-item--active": subItem.isSelected }), role: "link" }, subItem.name))); }))))); })))); }))));
    };
    /**
     * Handle closing the menu.
     */
    SideMenu.prototype.handleCloseClick = function () {
        if (this.props.isMenuOpen && this.props.handleClose) {
            document.body.classList.toggle("no-scroll", false);
            this.props.handleClose();
        }
    };
    /**
     * Handle any key presses.
     * @param event The key press event.
     */
    SideMenu.prototype.handleKeyDown = function (event) {
        if (event.keyCode === 27) {
            this.handleCloseClick();
        }
    };
    /**
     * Handle a header being clicked.
     * @param index The index of the header that was clicked.
     */
    SideMenu.prototype.handleHeadingClick = function (index) {
        this.setState({
            items: this.state.items.map(function (item, ind) {
                return (ind === index ? __assign({}, item, { isExpanded: !item.isExpanded }) : __assign({}, item, { isExpanded: false }));
            })
        });
    };
    /**
     * Handle the click from the select element in mobile view.
     * @param url The url to handle.
     */
    SideMenu.prototype.handleClick = function (url) {
        if (url) {
            if (url.startsWith("http")) {
                window.open(url, "_blank");
            }
            else {
                this.props.history.push(url);
            }
            this.handleCloseClick();
        }
    };
    /**
     * Create state menu entries from the props.
     * @returns The state menu items.
     */
    SideMenu.prototype.createStateItems = function () {
        var stateItems = [];
        for (var i = 0; i < this.props.items.length; i++) {
            var propHeader = this.props.items[i];
            var stateHeader = {
                name: propHeader.name,
                link: propHeader.link,
                isExpanded: propHeader.isExpanded,
                items: []
            };
            if (propHeader.items && stateHeader.items) {
                for (var j = 0; j < propHeader.items.length; j++) {
                    var propSection = propHeader.items[j];
                    var stateSection = {
                        name: propSection.name,
                        link: propSection.link,
                        isExpanded: propSection.isExpanded,
                        items: []
                    };
                    if (propSection.items && stateSection.items) {
                        for (var k = 0; k < propSection.items.length; k++) {
                            var propItem = propSection.items[k];
                            var stateItem = {
                                name: propItem.name,
                                link: propItem.link,
                                isExpanded: propItem.isExpanded,
                                isSelected: propItem.link === this.props.selectedItemLink
                            };
                            stateSection.items.push(stateItem);
                        }
                        stateSection.isSelected = stateSection.items.findIndex(function (item) { return item.isSelected === true; }) >= 0;
                    }
                    stateHeader.items.push(stateSection);
                }
                stateHeader.isSelected = stateHeader.items.findIndex(function (item) { return item.isSelected === true; }) >= 0;
            }
            stateItems.push(stateHeader);
        }
        return stateItems;
    };
    return SideMenu;
}(react_1.default.Component));
exports.SideMenu = SideMenu;
