import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import { TextAreaRestrict } from "./TextAreaRestrict";
/**
 * The properties for the TextArea component.
 */
export interface TextAreaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    /**
     * Restrictions on the text area character set.
     */
    restrict?: TextAreaRestrict;
}
