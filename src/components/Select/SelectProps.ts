import { DetailedHTMLProps, SelectHTMLAttributes } from "react";
import { SelectSize } from "./SelectSize";

/**
 * The properties for the Select component.
 */
export interface SelectProps extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
    /**
     * The size of the select.
     */
    selectSize?: SelectSize;
}
