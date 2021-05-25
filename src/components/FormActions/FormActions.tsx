import React, { Component, ReactNode } from "react";
import { FormActionsProps } from "./FormActionsProps";

/**
 * Class FormActions.
 */
export class FormActions extends Component<FormActionsProps> {
    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        return (
            <div className="form--actions">
                <div className="form--actions--spacer" />
                <div className="form--actions--content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
