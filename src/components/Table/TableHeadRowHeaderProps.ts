import { ReactNode } from "react";
/**
 * Properties for the Table Header Row Header.
 */
export interface TableHeadRowHeaderProps {
    /**
     * The children elements to display as content.
     */
    children: ReactNode | ReactNode[];

    /**
     * Horizontal alignment of the content.
     */
    align?: "left" | "center" | "right";
}
