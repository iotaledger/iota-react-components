/**
 * Helper methods for scrolling.
 */
export class ScrollHelper {
    /**
     * Scroll to the root element.
     */
    public static scrollRoot(): void {
        const root = document.querySelector("#root");
        if (root) {
            ScrollHelper.scrollIntoView(<HTMLElement>root, 300);
        }
    }

    /**
     * Scroll the element into view by selector.
     * @param selector The element selector to scroll into view.
     * @param scrollDuration The duration to use for the scrolling.
     * @param scrollComplete Callback called when scroll completes.
     */
    public static scrollIntoViewBySelector(
        selector: string,
        scrollDuration: number = 1000,
        scrollComplete?: () => void): void {
        const elem = document.querySelector(selector);
        if (elem) {
            ScrollHelper.scrollIntoView(<HTMLElement>elem, scrollDuration, scrollComplete);
        }
    }

    /**
     * Scroll the element into view.
     * @param elem The element to scroll into view.
     * @param scrollDuration The duration to use for the scrolling.
     * @param scrollComplete Callback called when scroll completes.
     */
    public static scrollIntoView(elem: HTMLElement, scrollDuration: number = 1000, scrollComplete?: () => void): void {
        if (elem) {
            const scrollElement = document.scrollingElement || document.body || document.documentElement;

            const animate = (start: number, from: number, to: number, duration: number) => {
                const time = Math.min(1, ((Date.now() - start) / duration));
                const eased = 0.5 * (1 - Math.cos(Math.PI * time));

                scrollElement.scrollTop = (eased * (to - from)) + from;

                if (time < 1) {
                    setTimeout(() => animate(start, from, to, duration), 0);
                } else {
                    if (scrollComplete) {
                        scrollComplete();
                    }
                }
            };

            if (scrollElement) {
                animate(Date.now(), scrollElement.scrollTop, elem.offsetTop, scrollDuration);
            } else {
                elem.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }
}
