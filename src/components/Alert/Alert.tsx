import classNames from "classnames";
import React, { Component, ReactNode } from "react";
import "./Alert.scss";
import { AlertProps } from "./AlertProps";

/**
 * Class to display a styled alert box.
 */
export class Alert extends Component<AlertProps> {
    /**
     * Create a new instance of Alert.
     * @param props The props.
     */
    constructor(props: AlertProps) {
        super(props);
    }

    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        return (
            <React.Fragment>
                {this.props.status && (
                    <div className={classNames("alert", this.props.color)}>
                        {this.props.status.split("\n").map((s, idx) => (
                            <React.Fragment key={idx}>
                                <span>{s}</span>
                                <br />
                            </React.Fragment>
                        ))}
                    </div>
                )}
            </React.Fragment>
        );
    }
}
