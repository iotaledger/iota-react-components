import React, { Component, ReactNode } from "react";
import Lottie from "react-lottie";
import successAnimation from "../../assets/success-animation.json";
import { SuccessProps } from "./SuccessProps";

/**
 * Class to display a success animation.
 */
export class Success extends Component<SuccessProps> {
    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
                        width="50px"
                        height="50px"
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
