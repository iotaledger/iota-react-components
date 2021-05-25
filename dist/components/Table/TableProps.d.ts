import { ReactNode } from "react";
/**
 * Properties for the table component.
 */
export interface TableProps {
    /**
     * The children elements to display as content.
     */
    children: ReactNode | ReactNode[];
    /**
     * Should we show in compact mode.
     */
    compact?: boolean;
}
