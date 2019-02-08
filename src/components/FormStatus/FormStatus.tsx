import classNames from "classnames";
import React, { Component, ReactNode } from "react";
import { Alert } from "../Alert/Alert";
import { Spinner } from "../Spinner/Spinner";
import { FormStatusProps } from "./FormStatusProps";

/**
 * Class FormStatus.
 */
export class FormStatus extends Component<FormStatusProps> {
    /**
     * Create a new instance of FormStatus.
     * @param props The properties.
     * @param context The context.
     */
    constructor(props: FormStatusProps, context: {}) {
        super(props, context);
    }

    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        return this.props.message ? (
            <div className="form--status">
                {!this.props.fullWidth && (
                    <label />
                )}
                <div className={classNames("form--status-content", { "form--status-content__error": this.props.isError })}>
                    {this.props.isBusy && (
                        <Spinner />
                    )}

                    {this.props.message}
                </div>
            </div>
        ) : null;
    }
}
