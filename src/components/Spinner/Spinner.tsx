import { Player } from "@lottiefiles/react-lottie-player";
import React, { Component, ReactNode } from "react";
import spinnerLoader from "../../assets/spinner-loader.json";
import { SpinnerProps } from "./SpinnerProps";

/**
 * Class to display a spinner.
 */
export class Spinner extends Component<SpinnerProps> {
    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        return (
            <div className="spinner" style={{ display: "inline-block" }}>
                <Player
                    src={spinnerLoader}
                    style={{
                        width: `${this.props.size === "small" ? 25 : 50}px`,
                        height: `${this.props.size === "small" ? 25 : 50}px`
                    }}
                />
            </div>

        );
    }
}
