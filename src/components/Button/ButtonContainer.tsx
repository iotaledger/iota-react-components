import classNames from "classnames";
import React, { Component, ReactNode } from "react";
import { ButtonContainerProps } from "./ButtonContainerProps";

/**
 * Class ButtonContainer.
 */
export class ButtonContainer extends Component<ButtonContainerProps> {
    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        return (
            <div
                className={
                    classNames(
                        "button-container",
                        { "button-container__center": this.props.align === "center" },
                        { "button-container__right": this.props.align === "right" }
                    )
                }
            >
                {this.props.children}
            </div>
        );
    }
}
