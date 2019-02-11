import React, { Component, ReactNode } from "react";
import Lottie from "react-lottie";
import successAnimation from "../../assets/success-animation.json";
import { SuccessProps } from "./SuccessProps.js";

/**
 * Class to display a success animation.
 */
export class Success extends Component<SuccessProps> {
    /**
     * Create a new instance of Success.
     * @param props The props.
     */
    constructor(props: SuccessProps) {
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
        const successOptions = {
            animationData: successAnimation,
            loop: false,
            rendererSettings: renderSettings
        };

        return (
            <div className="success-wrapper">
                <div className="success-icon">
                    <Lottie
                        options={successOptions}
                        width={50}
                        height={50}
                    />
                </div>
                {this.props.message && (
                    <div className="success-message">
                        {this.props.message.split("\n").map((s, idx) => (
                            <span key={idx}>{s}</span>
                        ))}
                    </div>
                )}
            </div>

        );
    }
}
