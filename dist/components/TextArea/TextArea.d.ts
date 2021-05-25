import { Component, ReactNode } from "react";
import { TextAreaProps } from "./TextAreaProps";
import { TextAreaState } from "./TextAreaState";
/**
 * Class TextArea.
 */
export declare class TextArea extends Component<TextAreaProps, TextAreaState> {
    /**
     * Create a new instance of TextArea.
     * @param props The properties.
     */
    constructor(props: TextAreaProps);
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
