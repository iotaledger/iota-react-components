import React, { ReactNode } from "react";
import { FooterProps } from "./FooterProps";
/**
 * Component to display styled footer.
 */
export declare class Footer extends React.Component<FooterProps> {
    constructor(props: FooterProps);
    /**
     * Render the component.
     * @returns The node to render.
     */
    render(): ReactNode;
    /**
     * Handle the click from the select element in mobile view.
     * @param url The url to handle.
     */
    private handleClick;
}
