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
 * Component to add a hot jar script.
 */
var HotJar = /** @class */ (function (_super) {
    __extends(HotJar, _super);
    function HotJar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Render the component.
     * @returns The node to render.
     */
    HotJar.prototype.render = function () {
        if (!this.props.id) {
            return null;
        }
        // tslint:disable:react-no-dangerous-html
        var src = "(function(h,o,t,j,a,r){\n            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};\n            h._hjSettings={hjid:" + this.props.id + ",hjsv:6};\n            a=o.getElementsByTagName('head')[0];\n            r=o.createElement('script');r.async=1;\n            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;\n            a.appendChild(r);\n        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');";
        return react_1.default.createElement("script", { dangerouslySetInnerHTML: { __html: src } });
    };
    return HotJar;
}(react_1.default.PureComponent));
exports.HotJar = HotJar;
