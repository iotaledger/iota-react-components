import { ReactNode } from "react";

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