import { ReactNode } from "react";
/**
 * Properties for Table Body Row Header.
 */
export interface TableBodyRowHeaderProps {
    /**
     * The children elements to display as content.
     */
    children: ReactNode | ReactNode[];
    /**
     * Horizontal alignment of the content.
     */
    align?: "left" | "center" | "right";
}
