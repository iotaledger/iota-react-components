import React, { Component, KeyboardEvent, ReactNode } from "react";
import { TextAreaProps } from "./TextAreaProps";
import { TextAreaRestrict } from "./TextAreaRestrict";
import { TextAreaState } from "./TextAreaState";

/**
 * Class TextArea.
 */
export class TextArea extends Component<TextAreaProps, TextAreaState> {
    /**
     * Create a new instance of TextArea.
     * @param props The properties.
     * @param context The context.
     */
    constructor(props: TextAreaProps) {
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
        const { restrict, ...actualProps } = this.props;

        return (
            <textarea
                {...actualProps}
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
    private handleKeyDown(evt: KeyboardEvent, restrict: TextAreaRestrict | undefined): void {
        const keyCode = evt.keyCode || evt.which;
        const isNavigation = keyCode >= 8 && keyCode <= 46;
        const isModified = evt.ctrlKey || evt.metaKey;

        if (!isNavigation && !isModified) {
            if (restrict === "trytes") {
                const keyValue = String.fromCharCode(keyCode);
                const isTrytes = /[A-Z9]/.test(keyValue);

                if (!isTrytes) {
                    evt.preventDefault();
                }
            }
        }
    }
}