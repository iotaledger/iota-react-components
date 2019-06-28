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
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
/**
 * Class TextArea.
 */
var TextArea = /** @class */ (function (_super) {
    __extends(TextArea, _super);
    /**
     * Create a new instance of TextArea.
     * @param props The properties.
     * @param context The context.
     */
    function TextArea(props) {
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
    TextArea.prototype.render = function () {
        var _this = this;
        var _a = this.props, restrict = _a.restrict, actualProps = __rest(_a, ["restrict"]);
        return (react_1.default.createElement("textarea", __assign({}, actualProps, { onChange: function (e) {
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
    TextArea.prototype.handleKeyDown = function (evt, restrict) {
        var keyCode = evt.keyCode || evt.which;
        var isNavigation = keyCode >= 8 && keyCode <= 46;
        var isModified = evt.ctrlKey || evt.metaKey;
        if (!isNavigation && !isModified) {
            if (restrict === "trytes") {
                var keyValue = String.fromCharCode(keyCode);
                var isTrytes = /[A-Z9]/.test(keyValue);
                if (!isTrytes) {
                    evt.preventDefault();
                }
            }
        }
    };
    return TextArea;
}(react_1.Component));
exports.TextArea = TextArea;
