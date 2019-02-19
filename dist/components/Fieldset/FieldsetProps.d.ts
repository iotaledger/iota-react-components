import { ReactNode } from "react";
/**
 * The properties for the Fieldset component.
 */
export interface FieldsetProps {
    /**
     * The children elements to display as content.
     */
    children?: ReactNode | ReactNode[];
    /**
     * Display a small fieldset.
     */
    small?: boolean;
}
