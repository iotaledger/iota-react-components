import React, { Component, ReactNode } from "react";
import Lottie from "react-lottie";
import successAnimation from "../../assets/success-animation.json";

/**
 * Class to display a success animation.
 */
export class Success extends Component {
    /**
     * Create a new instance of Success.
     * @param props The props.
     */
    constructor(props: any) {
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
            <div style={{display: "inline-block"}}>
                <Lottie
                    options={successOptions}
                    width={50}
                    height={50}
                />
            </div>

        );
    }
}
