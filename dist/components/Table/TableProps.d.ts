import { ReactNode } from "react";
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
