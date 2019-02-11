import { ReactNode } from "react";

/**
 * The properties for the PaginationInfoProps component.
 */
export interface PaginationInfoProps {
    /**
     * The children elements to display as content.
     */
    children: ReactNode | ReactNode[];

    /**
     * The total number of items.
     */
    totalItems: number;

    /**
     * The current page.
     */
    page: number;

    /**
     * The page size.
     */
    pageSize: number;
}
