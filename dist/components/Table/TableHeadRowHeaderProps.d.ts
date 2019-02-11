import { ReactNode } from "react";
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
