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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const renderSettings: any = {
            viewBoxSize: "100 70 200 150"
        };

        return (
            <div className="spinner" style={{ display: "inline-block" }}>
                <Lottie
                    animationData={spinnerLoader}
                    rendererSettings={renderSettings}
                    style={{
                        width: `${this.props.size === "small" ? 25 : 50}px`,
                        height: `${this.props.size === "small" ? 25 : 50}px`
                    }}
                />
            </div>

        );
    }
}
