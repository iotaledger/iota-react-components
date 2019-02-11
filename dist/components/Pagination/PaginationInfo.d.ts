import { Component, ReactNode } from "react";
import { PaginationInfoProps } from "./PaginationInfoProps";
import { PaginationInfoState } from "./PaginationInfoState";
/**
 * Class PaginationInfo.
 */
export declare class PaginationInfo extends Component<PaginationInfoProps, PaginationInfoState> {
    /**
     * Create a new instance of PaginationInfo.
     * @param props The properties.
     * @param context The context.
     */
    constructor(props: PaginationInfoProps, context: {});
    /**
     * Render the component.
     * @returns The node to render.
     */
    render(): ReactNode;
    /**
     * Calculate the pagination info for the pages.
     * @returns The pagination info.
     */
    private calculatePaginationInfo;
}
