import classNames from "classnames";
import React, { Component, ReactNode } from "react";
import { SelectProps } from "./SelectProps";

/**
 * Class Select.
 */
export class Select extends Component<SelectProps> {
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
