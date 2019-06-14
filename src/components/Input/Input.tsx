import classNames from "classnames";
import React, { Component, KeyboardEvent, ReactNode } from "react";
import { InputProps } from "./InputProps";
import { InputRestrict } from "./InputRestrict";
import { InputState } from "./InputState";

/**
 * Class Input.
 */
export class Input extends Component<InputProps, InputState> {
    /**
     * Create a new instance of Input.
     * @param props The properties.
     * @param context The context.
     */
    constructor(props: InputProps) {
        super(props);

        this.state = {
            hasContent: false
        };
    }

    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        const { inputSize, restrict, ...actualProps } = this.props;
        return (
            <input
                {...actualProps}
                className={
                    classNames(
                        { small: inputSize === "small" })
                }
                onChange={(e) => {
                    this.setState({ hasContent: e.target.value.length > 0 });
                    if (this.props.onChange) {
                        this.props.onChange(e);
                    }
                }}
                style={this.state.hasContent && restrict === "trytes" ? { textTransform: "uppercase" } : undefined}
                onKeyDown={(e) => this.handleKeyDown(e, restrict)}
            />
        );
    }

    /**
     * Handle the key down event.
     * @param evt The event.
     * @param restrict The restrict mode.
     */
    private handleKeyDown(evt: KeyboardEvent, restrict: InputRestrict | undefined): void {
        const keyCode = evt.keyCode || evt.which;
        const isNavigation = keyCode >= 8 && keyCode <= 46;
        const isModified = evt.ctrlKey || evt.metaKey;

        if (!isNavigation && !isModified) {
            if (restrict === "integer") {
                const keyValue = String.fromCharCode(keyCode);
                const isDigit = /\d/.test(keyValue);
                if (!isDigit) {
                    evt.preventDefault();
                }
            } else if (restrict === "float") {
                const keyValue = String.fromCharCode(keyCode);
                const isDigit = /\d/.test(keyValue);

                if (keyCode === 190 || keyCode === 110) {
                    const val = this.props.value as string;
                    if (val.indexOf(".") >= 0) {
                        evt.preventDefault();
                    }
                } else if (!isDigit) {
                    evt.preventDefault();
                }
            } else if (restrict === "trytes") {
                const keyValue = String.fromCharCode(keyCode);
                const isTrytes = /[A-Z9]/.test(keyValue);

                if (!isTrytes) {
                    evt.preventDefault();
                }
            }
        }
    }
}
