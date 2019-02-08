import classNames from "classnames";
import React, { Component, ReactNode } from "react";
import { Spinner } from "../Spinner/Spinner";
import { StatusMessageProps } from "./StatusMessageProps";

/**
 * Class to display a styled status message.
 */
export class StatusMessage extends Component<StatusMessageProps> {
    /**
     * Create a new instance of StatusMessage.
     * @param props The props.
     */
    constructor(props: StatusMessageProps) {
        super(props);
    }

    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        return this.props.status ? (
            <div className={classNames("status-message", this.props.color)}>
                {this.props.isBusy && (
                    <Spinner />
                )}
                <div className="status">
                    {this.props.status.split("\n").map((s, idx) => (
                        <span key={idx}>{s}</span>
                    ))}
                </div>
            </div>
        ) : null;
    }
}