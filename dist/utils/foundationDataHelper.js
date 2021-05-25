"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoundationDataHelper = void 0;
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
/**
 * Class to help with foundation data.
 */
var FoundationDataHelper = /** @class */ (function () {
    function FoundationDataHelper() {
    }
    /**
     * Load the found data.
     * @returns The loaded foundation data.
     */
    FoundationDataHelper.loadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var foundationDataResponse, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!!FoundationDataHelper._foundationData) return [3 /*break*/, 5];
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch(FoundationDataHelper.FOUNDATION_DATA_URL)];
                    case 2:
                        foundationDataResponse = _c.sent();
                        _a = FoundationDataHelper;
                        return [4 /*yield*/, foundationDataResponse.json()];
                    case 3:
                        _a._foundationData = _c.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        _b = _c.sent();
                        // eslint-disable-next-line no-console
                        console.error("Failed loading foundation data from " + FoundationDataHelper.FOUNDATION_DATA_URL);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/, FoundationDataHelper._foundationData];
                }
            });
        });
    };
    /**
     * Create the display for a value.
     * @param info The information to display.
     * @param info.label The label for the information.
     * @param info.value The optional value for the information.
     * @param info.urls The optional urls.
     * @param key The key of the item.
     * @returns The element to display.
     */
    FoundationDataHelper.createValue = function (info, key) {
        var _a;
        return (react_1.default.createElement(react_1.default.Fragment, { key: key },
            info.label && (react_1.default.createElement("span", { className: "data-label", dangerouslySetInnerHTML: { __html: FoundationDataHelper.buildLines(info.label) } })),
            info.value && (react_1.default.createElement("span", { className: "data-value", dangerouslySetInnerHTML: { __html: FoundationDataHelper.buildLines(info.value) } })), (_a = info.urls) === null || _a === void 0 ? void 0 :
            _a.map(function (link, idx) { return (react_1.default.createElement(react_1.default.Fragment, { key: idx },
                FoundationDataHelper.buildLink(link.url, link.label),
                info.urls && idx < info.urls.length - 1 && ", ")); })));
    };
    /**
     * Build lines to display.
     * @param content The content to display.
     * @returns The element to display.
     */
    FoundationDataHelper.buildLines = function (content) {
        if (Array.isArray(content)) {
            return "<span className=\"line-breaks\">" + content.join("\n") + "</span>";
        }
        return content;
    };
    /**
     * Build link as either local or external.
     * @param url The url to create.
     * @param value The label for the link.
     * @param key The key of the item.
     * @returns The created link element.
     */
    FoundationDataHelper.buildLink = function (url, value, key) {
        if (url.startsWith("http") || url.startsWith("mailto")) {
            return (react_1.default.createElement("a", { className: "data-link", href: url, key: key, target: "_blank", rel: "noopener noreferrer", dangerouslySetInnerHTML: { __html: FoundationDataHelper.buildLines(value) } }));
        }
        return (react_1.default.createElement(react_router_dom_1.Link, { className: "data-link", key: key, to: url.replace("local:/", ""), dangerouslySetInnerHTML: { __html: FoundationDataHelper.buildLines(value) } }));
    };
    /**
     * The location of the foundation data.
     */
    FoundationDataHelper.FOUNDATION_DATA_URL = "https://webassets.iota.org/data/foundation.json";
    return FoundationDataHelper;
}());
exports.FoundationDataHelper = FoundationDataHelper;
