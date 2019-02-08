import React, { Component, ReactNode } from "react";
import { FormActionsProps } from "./FormActionsProps";

/**
 * Class FormActions.
 */
export class FormActions extends Component<FormActionsProps> {
    /**
     * Create a new instance of FormActions.
     * @param props The properties.
     * @param context The context.
     */
    constructor(props: FormActionsProps, context: {}) {
        super(props, context);
    }

    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        return (
            <div className="form--actions">
                {this.props.children}
            </div>
        );
    }
}
