import { AlertColor } from "./AlertColor";
export interface AlertProps {
    /**
     * The text to display in the alert.
     */
    status: string;
    /**
     * The color to display the alert.
     */
    color: AlertColor;
}
