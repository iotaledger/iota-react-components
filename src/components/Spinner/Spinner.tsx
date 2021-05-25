import React, { Component, ReactNode } from "react";
import Lottie from "react-lottie-player";
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
        const renderSettings: unknown = {
            viewBoxSize: "100 70 200 150"
        };

        return (
            <div className="spinner" style={{ display: "inline-block" }}>
                <Lottie
                    animationData={spinnerLoader}
                    rendererSettings={renderSettings}
                    style={{
                        width: this.props.size === "small" ? 25 : 50,
                        height: this.props.size === "small" ? 25 : 50
                    }}
                />
            </div>

        );
    }
}
