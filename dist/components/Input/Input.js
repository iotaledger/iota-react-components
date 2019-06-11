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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importStar(require("react"));
/**
 * Class Input.
 */
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    /**
     * Create a new instance of Input.
     * @param props The properties.
     * @param context The context.
     */
    function Input(props, context) {
        return _super.call(this, props, context) || this;
    }
    /**
     * Render the component.
     * @returns The node to render.
     */
    Input.prototype.render = function () {
        var _this = this;
        var _a = this.props, inputSize = _a.inputSize, restrict = _a.restrict, actualProps = __rest(_a, ["inputSize", "restrict"]);
        return (react_1.default.createElement("input", __assign({}, actualProps, { className: classnames_1.default({ small: inputSize === "small" }), onKeyDown: function (e) { return _this.handleKeyDown(e, restrict); } })));
    };
    /**
     * Handle the key down event.
     * @param evt The event.
     * @param restrict The restrict mode.
     */
    Input.prototype.handleKeyDown = function (evt, restrict) {
        var keyCode = evt.keyCode || evt.which;
        var isNavigation = keyCode >= 8 && keyCode <= 46;
        var isModified = evt.ctrlKey || evt.metaKey;
        if (!isNavigation && !isModified) {
            if (restrict === "integer") {
                var keyValue = String.fromCharCode(keyCode);
                var isDigit = /\d/.test(keyValue);
                if (!isDigit) {
                    evt.preventDefault();
                }
            }
            else if (restrict === "float") {
                var keyValue = String.fromCharCode(keyCode);
                var isDigit = /\d/.test(keyValue);
                if (keyCode === 190 || keyCode === 110) {
                    var val = this.props.value;
                    if (val.indexOf(".") >= 0) {
                        evt.preventDefault();
                    }
                }
                else if (!isDigit) {
                    evt.preventDefault();
                }
            }
        }
    };
    return Input;
}(react_1.Component));
exports.Input = Input;