import { Component, ReactNode } from "react";
import { ModalProps } from "./ModalProps";
/**
 * Class to display a modal dialog.
 */
export declare class Modal extends Component<ModalProps> {
    /**
     * The component mounted.
     */
    componentDidMount(): void;
    /**
     * Render the component.
     * @returns The node to render.
     */
    render(): ReactNode;
    /**
     * Handle the close click.
     * @param id The id of the button that was clicked.
     */
    private handleClose;
}
