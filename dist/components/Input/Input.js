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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
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
     */
    function Input(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            hasContent: false
        };
        return _this;
    }
    /**
     * Render the component.
     * @returns The node to render.
     */
    Input.prototype.render = function () {
        var _this = this;
        var _a = this.props, inputSize = _a.inputSize, restrict = _a.restrict, placeholder = _a.placeholder, actualProps = __rest(_a, ["inputSize", "restrict", "placeholder"]);
        return (react_1.default.createElement("input", __assign({}, actualProps, { placeholder: placeholder, className: classnames_1.default({ small: inputSize === "small" }), onChange: function (e) {
                _this.setState({ hasContent: e.target.value.length > 0 });
                if (_this.props.onChange) {
                    _this.props.onChange(e);
                }
            }, style: this.state.hasContent && restrict === "trytes" ? { textTransform: "uppercase" } : undefined, onKeyDown: function (e) { return _this.handleKeyDown(e, restrict); } })));
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
                    if (val.includes(".")) {
                        evt.preventDefault();
                    }
                }
                else if (!isDigit) {
                    evt.preventDefault();
                }
            }
            else if (restrict === "trytes") {
                var keyValue = String.fromCharCode(keyCode);
                var isTrytes = /[9A-Z]/.test(keyValue);
                if (!isTrytes) {
                    evt.preventDefault();
                }
            }
        }
    };
    return Input;
}(react_1.Component));
exports.Input = Input;
