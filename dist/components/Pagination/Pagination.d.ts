import { Component, ReactNode } from "react";
import { PaginationProps } from "./PaginationProps";
import { PaginationState } from "./PaginationState";
/**
 * Class Pagination.
 */
export declare class Pagination extends Component<PaginationProps, PaginationState> {
    /**
     * Create a new instance of Pagination.
     * @param props The properties.
     * @param context The context.
     */
    constructor(props: PaginationProps, context: {});
    /**
     * Handle the cick event.
     * @param page The page that was clicked.
     */
    handleClick(page: number): void;
    /**
     * Render the component.
     * @returns The node to render.
     */
    render(): ReactNode;
    /**
     * Calculate the pagination numbers.
     * @returns The array of page numbers.
     */
    private calculatePagination;
}
