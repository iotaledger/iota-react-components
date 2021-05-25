import { ReactNode } from "react";
import { ButtonColor } from "./ButtonColor";
import { ButtonSize } from "./ButtonSize";

/**
 * The properties for the Button component.
 */
export interface ButtonProps {
    /**
     * The children elements to display as content.
     */
    children?: ReactNode | ReactNode[];

    /**
     * The color style for the button.
     */
    color?: ButtonColor;

    /**
     * The size of the button.
     */
    size?: ButtonSize;

    /**
     * Is the button long style - will apply word break.
     */
    long?: boolean;

    /**
     * Is the button disabled.
     */
    disabled?: boolean;

    /**
     * Disable any case changes.
     */
    disableCaseStyle?: boolean;

    /**
     * Event handler triggered on click.
     */
    onClick?: React.MouseEventHandler<unknown>;
}
