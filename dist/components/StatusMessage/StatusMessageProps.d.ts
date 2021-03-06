import { StatusMessageColor } from "./StatusMessageColor";
/**
 * Status message properties.
 */
export interface StatusMessageProps {
    /**
     * The text to display in the status message.
     */
    status: string;
    /**
     * The color to display the status message.
     */
    color?: StatusMessageColor;
    /**
     * Show a busy spinner.
     */
    isBusy?: boolean;
    /**
     * Show a success spinner.
     */
    isSuccess?: boolean;
}
