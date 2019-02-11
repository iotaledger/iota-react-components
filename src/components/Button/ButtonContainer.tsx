import classNames from "classnames";
import React, { Component, ReactNode } from "react";
import { ButtonContainerProps } from "./ButtonContainerProps";

/**
 * Class ButtonContainer.
 */
export class ButtonContainer extends Component<ButtonContainerProps> {
    /**
     * Create a new instance of ButtonContainer.
     * @param props The properties.
     * @param context The context.
     */
    constructor(props: ButtonContainerProps, context: {}) {
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
