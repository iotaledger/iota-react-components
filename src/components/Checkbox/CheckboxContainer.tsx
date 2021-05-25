import classNames from "classnames";
import React, { Component, ReactNode } from "react";
import { CheckboxContainerProps } from "./CheckboxContainerProps";

/**
 * Class CheckboxContainer.
 */
export class CheckboxContainer extends Component<CheckboxContainerProps> {
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
