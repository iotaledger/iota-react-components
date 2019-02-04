/**
 * The properties for the Pagination component.
 */
export interface PaginationProps {
    /**
     * Total number of pages.
     */
    totalPages: number;
    /**
     * The delta to show either side of current.
     */
    delta?: number;
    /**
     * The current page to show selected.
     */
    page: number;
    /**
     * Event handler triggered on selected item changed.
     */
    onChange(page: number): void;
}
