import { Component, ReactNode } from "react";
import { InputProps } from "./InputProps";
/**
 * Class Input.
 */
export declare class Input extends Component<InputProps> {
    /**
     * Create a new instance of Input.
     * @param props The properties.
     * @param context The context.
     */
    constructor(props: InputProps, context: {});
    /**
     * Render the component.
     * @returns The node to render.
     */
    render(): ReactNode;
    /**
     * Handle the key down event.
     * @param evt The event.
     * @param restrict The restrict mode.
     */
    private handleKeyDown;
}
