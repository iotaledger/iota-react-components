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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_qr_reader_1 = __importDefault(require("react-qr-reader"));
var Button_1 = require("../Button/Button");
var Fieldset_1 = require("../Fieldset/Fieldset");
var Form_1 = require("../Form/Form");
var Heading_1 = require("../Heading/Heading");
var Select_1 = require("../Select/Select");
require("./QRReader.scss");
/**
 * Component which will view display a QR reader.
 */
var QRReader = /** @class */ (function (_super) {
    __extends(QRReader, _super);
    /**
     * Create a new instance of GenerateCertificate.
     * @param props The props.
     */
    function QRReader(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            facingMode: "environment"
        };
        return _this;
    }
    /**
     * The component mounted.
     */
    QRReader.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var qrCameraFacingMode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.retrieve("qrCameraFacingMode")];
                    case 1:
                        qrCameraFacingMode = _a.sent();
                        qrCameraFacingMode = qrCameraFacingMode || "environment";
                        this.setState({
                            facingMode: qrCameraFacingMode
                        });
                        document.body.classList.toggle("no-scroll", true);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * The component will unmount so add back doc scroll.
     */
    QRReader.prototype.componentWillUnmount = function () {
        document.body.classList.toggle("no-scroll", false);
    };
    /**
     * Handle the scanner data.
     * @param data The data.
     */
    QRReader.prototype.handleScan = function (data) {
        if (data !== null) {
            this.props.onData(data);
        }
    };
    /**
     * Handle error from scanner.
     */
    QRReader.prototype.handleError = function () {
    };
    /**
     * Render the component.
     * @returns The node to render.
     */
    QRReader.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement("div", { className: "qr-reader" },
            react_1.default.createElement("div", { className: "qr-reader-overlay" }),
            react_1.default.createElement(Heading_1.Heading, { level: 1, className: "text--tertiary" }, "QR Scanner"),
            react_1.default.createElement("p", null, "When the QR is detected the scanner will automatically close."),
            react_1.default.createElement(Form_1.Form, null,
                react_1.default.createElement(Fieldset_1.Fieldset, null,
                    react_1.default.createElement("label", null, "Camera"),
                    react_1.default.createElement(Select_1.Select, { value: this.state.facingMode, onChange: function (e) {
                            return _this.setState({ facingMode: e.target.value }, function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                return [2 /*return*/, this.store("qrCameraFacingMode", this.state.facingMode).catch(function (err) { })];
                            }); }); });
                        } },
                        react_1.default.createElement("option", { value: "environment" }, "Environment"),
                        react_1.default.createElement("option", { value: "user" }, "User")))),
            react_1.default.createElement(react_qr_reader_1.default, { facingMode: this.state.facingMode, className: "qr-reader-scan", delay: 300, onError: function () { return _this.handleError(); }, onScan: function (data) { return _this.handleScan(data); } }),
            react_1.default.createElement(Button_1.Button, { color: "primary", onClick: function () { return _this.handleScan(undefined); } }, "Close")));
    };
    /**
     * Store something in the local storage.
     * @param name The name of the item to store.
     * @param data The name of the item to store.
     * @returns Nothing.
     */
    QRReader.prototype.store = function (name, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    if (window.localStorage) {
                        window.localStorage.setItem(name, JSON.stringify(data));
                    }
                }
                catch (err) {
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Retrieve something from the local storage.
     * @param name The name of the item to store.
     * @returns The data or undefined if it does not exist.
     */
    QRReader.prototype.retrieve = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                try {
                    if (window.localStorage) {
                        data = window.localStorage.getItem(name);
                        if (data) {
                            return [2 /*return*/, JSON.parse(data)];
                        }
                    }
                }
                catch (err) {
                }
                return [2 /*return*/];
            });
        });
    };
    return QRReader;
}(react_1.Component));
exports.QRReader = QRReader;
