/**
 * Helper methods for scrolling.
 */
export declare class ScrollHelper {
    /**
     * Scroll to the root element.
     */
    static scrollRoot(): void;
    /**
     * Scroll the element into view by selector.
     * @param selector The element selector to scroll into view.
     * @param scrollDuration The duration to use for the scrolling.
     * @param scrollComplete Callback called when scroll completes.
     */
    static scrollIntoViewBySelector(selector: string, scrollDuration?: number, scrollComplete?: () => void): void;
    /**
     * Scroll the element into view.
     * @param elem The element to scroll into view.
     * @param scrollDuration The duration to use for the scrolling.
     * @param scrollComplete Callback called when scroll completes.
     */
    static scrollIntoView(elem: HTMLElement, scrollDuration?: number, scrollComplete?: () => void): void;
}
