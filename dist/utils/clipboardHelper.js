"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClipboardHelper = void 0;
/**
 * Helper methods for clipbaord.
 */
var ClipboardHelper = /** @class */ (function () {
    function ClipboardHelper() {
    }
    /**
     * Copy the text to the clipboard.
     * @param text The text to copy.
     * @returns True id the text was copied.
     */
    ClipboardHelper.copy = function (text) {
        if (text !== undefined && text !== null) {
            try {
                var textArea = document.createElement("textarea");
                // Prevent zooming on iOS
                textArea.style.fontSize = "12pt";
                // Reset box model
                textArea.style.border = "0";
                textArea.style.padding = "0";
                textArea.style.margin = "0";
                // Move element out of screen horizontally
                textArea.style.position = "absolute";
                textArea.style.left = "-9999px";
                // Move element to the same position vertically
                var yPosition = window.pageYOffset || document.documentElement.scrollTop;
                textArea.style.top = yPosition + "px";
                textArea.setAttribute("readonly", "");
                textArea.value = text;
                document.body.append(textArea);
                textArea.select();
                document.execCommand("Copy");
                textArea.remove();
                return true;
            }
            catch (_a) {
                // Not much we can do
                return false;
            }
        }
        else {
            return false;
        }
    };
    return ClipboardHelper;
}());
exports.ClipboardHelper = ClipboardHelper;
