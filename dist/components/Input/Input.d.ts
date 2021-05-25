import { Component, ReactNode } from "react";
import { InputProps } from "./InputProps";
import { InputState } from "./InputState";
/**
 * Class Input.
 */
export declare class Input extends Component<InputProps, InputState> {
    /**
     * Create a new instance of Input.
     * @param props The properties.
     */
    constructor(props: InputProps);
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
