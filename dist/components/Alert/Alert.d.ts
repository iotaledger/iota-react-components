import { Component, ReactNode } from "react";
import "./Alert.scss";
import { AlertProps } from "./AlertProps";
/**
 * Class to display a styled alert box.
 */
export declare class Alert extends Component<AlertProps> {
    /**
     * Create a new instance of Alert.
     * @param props The props.
     */
    constructor(props: AlertProps);
    /**
     * Render the component.
     * @returns The node to render.
     */
    render(): ReactNode;
}
