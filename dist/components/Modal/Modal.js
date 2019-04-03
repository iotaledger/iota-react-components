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
var Button_1 = require("../Button/Button");
/**
 * Class to display a modal dialog.
 */
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    /**
     * Create a new instance of Modal.
     * @param props The props.
     */
    function Modal(props) {
        return _super.call(this, props) || this;
    }
    /**
     * The component mounted.
     */
    Modal.prototype.componentDidMount = function () {
        document.body.classList.toggle("no-scroll", true);
    };
    /**
     * Render the component.
     * @returns The node to render.
     */
    Modal.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement("div", { className: "modal-wrapper" },
            react_1.default.createElement("div", { className: "modal-overlay" }),
            react_1.default.createElement("div", { className: "modal-container" },
                react_1.default.createElement("div", { className: "modal" },
                    react_1.default.createElement("div", { className: "modal-title" }, this.props.title),
                    react_1.default.createElement("div", { className: "modal-content" }, this.props.children),
                    react_1.default.createElement("div", { className: "modal-actions" }, this.props.buttons.map(function (b, idx) { return (react_1.default.createElement(Button_1.Button, { onClick: function () { return _this.handleClose(b.id); }, key: idx }, b.label)); }))))));
    };
    /**
     * Handle the close click.
     * @param id The id of the button that was clicked.
     */
    Modal.prototype.handleClose = function (id) {
        document.body.classList.toggle("no-scroll", false);
        if (this.props.onClose) {
            this.props.onClose(id);
        }
    };
    return Modal;
}(react_1.Component));
exports.Modal = Modal;
