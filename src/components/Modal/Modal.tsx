import React, { Component, ReactNode } from "react";
import { Button } from "../Button/Button";
import { ModalProps } from "./ModalProps";

/**
 * Class to display a modal dialog.
 */
export class Modal extends Component<ModalProps> {
    /**
     * Create a new instance of Modal.
     * @param props The props.
     */
    constructor(props: ModalProps) {
        super(props);
    }

    /**
     * The component mounted.
     */
    public componentDidMount(): void {
        document.body.classList.toggle("no-scroll", true);
    }

    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        return (
            <div className="modal-wrapper">
                <div className="modal-overlay" />
                <div className="modal-container">
                    <div className="modal">
                        <div className="modal-title">
                            {this.props.title}
                        </div>
                        <div className="modal-content">
                            {this.props.children}
                        </div>
                        <div className="modal-actions">
                            {this.props.buttons.map((b, idx) => (
                                <Button onClick={() => this.handleClose(b.id)} key={idx}>{b.label}</Button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    /**
     * Handle the close click.
     * @param id The id of the button that was clicked.
     */
    private handleClose(id: string): void {
        document.body.classList.toggle("no-scroll", false);

        if (this.props.onClose) {
            this.props.onClose(id);
        }
    }
}
