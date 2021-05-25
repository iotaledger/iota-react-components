import classNames from "classnames";
import React, { Component, ReactNode } from "react";
import { CheckboxProps } from "./CheckboxProps";

/**
 * Class Checkbox.
 */
export class Checkbox extends Component<CheckboxProps> {
    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        /* tslint:disable:react-a11y-input-elements */
        return (
            <div
                className={
                    classNames(
                        "checkbox",
                        // eslint-disable-next-line camelcase
                        { checkbox__disabled: this.props.disabled }
                    )
                }
            >
                <div className="checkbox-border">
                    <input
                        type="checkbox"
                        checked={this.props.checked}
                        disabled={this.props.disabled}
                        onChange={e => this.props.onChange?.(e.target.checked)}
                    />
                </div>
                <label>{this.props.label}</label>
            </div>
        );
    }
}
