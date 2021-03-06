"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollHelper = void 0;
/**
 * Helper methods for scrolling.
 */
var ScrollHelper = /** @class */ (function () {
    function ScrollHelper() {
    }
    /**
     * Scroll to the root element.
     */
    ScrollHelper.scrollRoot = function () {
        var root = document.querySelector("#root");
        if (root) {
            ScrollHelper.scrollIntoView(root, 300);
        }
    };
    /**
     * Scroll the element into view by selector.
     * @param selector The element selector to scroll into view.
     * @param scrollDuration The duration to use for the scrolling.
     * @param scrollComplete Callback called when scroll completes.
     */
    ScrollHelper.scrollIntoViewBySelector = function (selector, scrollDuration, scrollComplete) {
        if (scrollDuration === void 0) { scrollDuration = 1000; }
        var elem = document.querySelector(selector);
        if (elem) {
            ScrollHelper.scrollIntoView(elem, scrollDuration, scrollComplete);
        }
    };
    /**
     * Scroll the element into view.
     * @param elem The element to scroll into view.
     * @param scrollDuration The duration to use for the scrolling.
     * @param scrollComplete Callback called when scroll completes.
     */
    ScrollHelper.scrollIntoView = function (elem, scrollDuration, scrollComplete) {
        var _a;
        if (scrollDuration === void 0) { scrollDuration = 1000; }
        if (elem) {
            var scrollElement_1 = ((_a = document.scrollingElement) !== null && _a !== void 0 ? _a : document.body) || document.documentElement;
            var animate_1 = function (start, from, to, duration) {
                var time = Math.min(1, ((Date.now() - start) / duration));
                var eased = 0.5 * (1 - Math.cos(Math.PI * time));
                scrollElement_1.scrollTop = (eased * (to - from)) + from;
                if (time < 1) {
                    setTimeout(function () { return animate_1(start, from, to, duration); }, 0);
                }
                else if (scrollComplete) {
                    scrollComplete();
                }
            };
            if (scrollElement_1) {
                animate_1(Date.now(), scrollElement_1.scrollTop, elem.offsetTop, scrollDuration);
            }
            else {
                elem.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    };
    return ScrollHelper;
}());
exports.ScrollHelper = ScrollHelper;
