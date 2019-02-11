import { ReactNode } from "react";
/**
 * The properties for the ButtonContainer component.
 */
export interface ButtonContainerProps {
    /**
     * The children elements to display as content.
     */
    children?: ReactNode | ReactNode[];
    /**
     * The alignment for the buttons.
     */
    align?: "left" | "center" | "right";
}
