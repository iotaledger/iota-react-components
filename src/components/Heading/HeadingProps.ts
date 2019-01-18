import { ReactNode } from "react";

export interface HeadingProps {
    /**
     * The level for the heading.
     */
    level: number;
    /**
     * The children elements to display as content.
     */
    children?: ReactNode | ReactNode[];
    /**
     * Class name for additional style.
     */
    className?: string;
    /**
     * Id for the element.
     */
    id?: string;
}
