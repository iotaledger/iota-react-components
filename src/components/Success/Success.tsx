import { Player } from "@lottiefiles/react-lottie-player";
import React, { Component, ReactNode } from "react";
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
        return (
            <div className="success-wrapper">
                <div className="success-icon">
                    <Player
                        src={successAnimation}
                        loop={false}
                        style={{ width: "50px", height: "50px" }}
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
