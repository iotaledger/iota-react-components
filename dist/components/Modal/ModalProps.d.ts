import { ReactNode } from "react";
/**
 * Properties for Modal.
 */
export interface ModalProps {
    /**
     * The title for the dialog.
     */
    title: string;
    /**
     * The children elements to display as content.
     */
    children: ReactNode;
    /**
     * The items to display as actions.
     */
    buttons: {
        /**
         * The id passed back when the button is clicked.
         */
        id: string;
        /**
         * The label to appear on the button.
         */
        label: string;
    }[];
    /**
     * Callback on button click.
     */
    onClose(buttonId?: string): void;
}
