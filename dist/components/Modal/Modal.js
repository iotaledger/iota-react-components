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
exports.Modal = void 0;
var react_1 = __importStar(require("react"));
var Button_1 = require("../Button/Button");
/**
 * Class to display a modal dialog.
 */
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        return _super !== null && _super.apply(this, arguments) || this;
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
