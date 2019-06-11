import React, { Component, ReactNode } from "react";
import { FieldrowProps } from "./FieldrowProps";

/**
 * Class Fieldrow.
 */
export class Fieldrow extends Component<FieldrowProps> {
    /**
     * Create a new instance of Fieldrow.
     * @param props The properties.
     * @param context The context.
     */
    constructor(props: FieldrowProps, context: {}) {
        super(props, context);
    }

    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        return (
            <div
                className="form--row"
            >
                {this.props.children}
            </div>
        );
    }
}
