import { ReactNode } from "react";
/**
 * Properties for the text component.
 */
export interface TextProps {
    /**
     * The children elements to display as content.
     */
    children: ReactNode | ReactNode[] | string;
    /**
     * Class name for additional style.
     */
    className?: string;
    /**
     * Is the children content html text.
     */
    isHtml?: boolean;
}
