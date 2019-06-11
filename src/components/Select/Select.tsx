import classNames from "classnames";
import React, { Component, ReactNode } from "react";
import { SelectProps } from "./SelectProps";

/**
 * Class Select.
 */
export class Select extends Component<SelectProps> {
    /**
     * Create a new instance of Select.
     * @param props The properties.
     * @param context The context.
     */
    constructor(props: SelectProps, context: {}) {
        super(props, context);
    }

    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        const { selectSize, ...actualProps } = this.props;
        return (
            <div
                className={
                    classNames(
                        "select-wrapper",
                        { small: selectSize === "small" })
                }
            >
                <select {...actualProps} />
            </div>
        );
    }
}
