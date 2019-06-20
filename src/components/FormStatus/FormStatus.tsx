import classNames from "classnames";
import React, { Component, ReactNode } from "react";
import { Spinner } from "../Spinner/Spinner";
import { Success } from "../Success/Success";
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

                    {this.props.isSuccess && (
                        <Success />
                    )}

                    <div className="form--status-message">
                        {this.props.message.split("\n").map((s, idx) => (
                            <span key={idx} dangerouslySetInnerHTML={ { __html: s || "&nbsp;"} }/>
                        ))}
                    </div>
                </div>
            </div>
        ) : null;
    }
}
