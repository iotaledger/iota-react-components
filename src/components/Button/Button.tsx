import classNames from "classnames";
import React, { Component, ReactNode } from "react";
import { ButtonProps } from "./ButtonProps";

/**
 * Class Button.
 */
export class Button extends Component<ButtonProps> {
    /**
     * Create a new instance of Button.
     * @param props The properties.
     * @param context The context.
     */
    constructor(props: ButtonProps, context: {}) {
        super(props, context);
    }

    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        return (
            <button
                className={
                    classNames(
                        "button",
                        { [`button--${this.props.color}`]: this.props.color },
                        { [`button--${this.props.size}`]: this.props.size && this.props.size !== "normal" },
                        { "button--long": this.props.long },
                        { "button--no-case": this.props.disableCaseStyle }
                    )
                }
                onClick={this.props.onClick}
                disabled={this.props.disabled}
            >
                {this.props.children}
            </button>
        );
    }
}
