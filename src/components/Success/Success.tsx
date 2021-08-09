import React, { Component, ReactNode } from "react";
import Lottie from "react-lottie-player";
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
        const renderSettings = {
            viewBoxSize: "100 70 200 150"
        };

        return (
            <div className="success-wrapper">
                <div className="success-icon">
                    <Lottie
                        animationData={successAnimation}
                        rendererSettings={renderSettings}
                        play={true}
                        loop={false}
                        style={{
                            width: 50,
                            height: 50
                        }}
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
