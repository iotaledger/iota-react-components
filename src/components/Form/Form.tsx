import React, { Component, ReactNode } from "react";
import { FormProps } from "./FormProps";

/**
 * Class Form.
 */
export class Form extends Component<FormProps> {
    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        return (
            <form className="form" onSubmit={e => e.preventDefault()}>
                {this.props.children}
            </form>
        );
    }
}
