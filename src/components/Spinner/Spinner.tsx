import React, { Component, ReactNode } from "react";
import Lottie from "react-lottie";
import spinnerLoader from "../../assets/spinner-loader.json";
import { SpinnerProps } from "./SpinnerProps";

/**
 * Class to display a spinner.
 */
export class Spinner extends Component<SpinnerProps> {
    /**
     * Create a new instance of Spinner.
     * @param props The props.
     */
    constructor(props: SpinnerProps) {
        super(props);
    }

    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        const renderSettings: any = {
            viewBoxSize: "100 70 200 150"
        };
        const spinOptions = {
            animationData: spinnerLoader,
            rendererSettings: renderSettings
        };

        return (
            <div className="spinner" style={{display: "inline-block"}}>
                <Lottie
                    options={spinOptions}
                    width={this.props.size === "small" ? 25 : 50}
                    height={this.props.size === "small" ? 25 : 50}
                />
            </div>

        );
    }
}
