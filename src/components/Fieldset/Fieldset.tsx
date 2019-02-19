import classNames from "classnames";
import React, { Component, ReactNode } from "react";
import { FieldsetProps } from "./FieldsetProps";

/**
 * Class Fieldset.
 */
export class Fieldset extends Component<FieldsetProps> {
    /**
     * Create a new instance of Fieldset.
     * @param props The properties.
     * @param context The context.
     */
    constructor(props: FieldsetProps, context: {}) {
        super(props, context);
    }

    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        return (
            <div
                className={
                    classNames(
                        "fieldset",
                        { "fieldset--small": this.props.small }
                    )
                }
            >
                {this.props.children}
            </div>
        );
    }
}
