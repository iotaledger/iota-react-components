import classNames from "classnames";
import React, { Component, ReactNode } from "react";
import { CheckboxContainerProps } from "./CheckboxContainerProps";

/**
 * Class CheckboxContainer.
 */
export class CheckboxContainer extends Component<CheckboxContainerProps> {
    /**
     * Create a new instance of CheckboxContainer.
     * @param props The properties.
     * @param context The context.
     */
    constructor(props: CheckboxContainerProps, context: {}) {
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
                        "checkbox-container"
                    )
                }
            >
                {this.props.children}
            </div>
        );
    }
}
