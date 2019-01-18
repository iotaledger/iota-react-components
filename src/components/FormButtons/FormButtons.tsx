import React, { Component, ReactNode } from "react";
import { FormButtonsProps } from "./FormButtonsProps";

/**
 * Class FormButtons.
 */
export class FormButtons extends Component<FormButtonsProps> {
    /**
     * Create a new instance of FormButtons.
     * @param props The properties.
     * @param context The context.
     */
    constructor(props: FormButtonsProps, context: {}) {
        super(props, context);
    }

    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        return (
            <div className="buttons">
                {this.props.children}
            </div>
        );
    }
}
