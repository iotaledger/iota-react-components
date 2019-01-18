import React, { Component, ReactNode } from "react";
import { FormProps } from "./FormProps";

/**
 * Class Form.
 */
export class Form extends Component<FormProps> {
    /**
     * Create a new instance of Form.
     * @param props The properties.
     * @param context The context.
     */
    constructor(props: FormProps, context: {}) {
        super(props, context);
    }

    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        return (
            <form className="form" onSubmit={(e) => e.preventDefault()}>
                {this.props.children}
            </form>
        );
    }
}
