import classNames from "classnames";
import React, { Component, ReactNode } from "react";
import { Spinner } from "../Spinner/Spinner";
import { Success } from "../Success/Success";
import { StatusMessageProps } from "./StatusMessageProps";

/**
 * Class to display a styled status message.
 */
export class StatusMessage extends Component<StatusMessageProps> {
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
                {this.props.isSuccess && (
                    <Success />
                )}
                <div className="status">
                    {this.props.status.split("\n").map((s, idx) => (
                        // tslint:disable-next-line:react-no-dangerous-html
                        <span key={idx} dangerouslySetInnerHTML={{ __html: s || "&nbsp;" }} />
                    ))}
                </div>
            </div>
        ) : null;
    }
}
