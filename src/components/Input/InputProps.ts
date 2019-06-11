import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { InputRestrict } from "./InputRestrict";
import { InputSize } from "./InputSize";

/**
 * The properties for the Input component.
 */
export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    /**
     * The size of the input.
     */
    inputSize?: InputSize;

    /**
     * Restrictions on the input character set.
     */
    restrict?: InputRestrict;
}
