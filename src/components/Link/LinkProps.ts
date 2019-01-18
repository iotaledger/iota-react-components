import { ReactNode } from "react";

export interface LinkProps {
    /**
     * The children elements to display as content.
     */

    children: ReactNode | ReactNode[];
    /**
     * The href to open.
     */
    href: string;
    /**
     * The target for a href.
     */
    target?: string;
    /**
     * Id for the element.
     */
    id?: string;
    /**
     * Class name for additional style.
     */
    className?: string;
}
