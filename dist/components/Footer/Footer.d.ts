import React, { ReactNode } from "react";
import { FooterProps } from "./FooterProps";
import { FooterState } from "./FooterState";
/**
 * Component to display styled footer.
 */
export declare class Footer extends React.Component<FooterProps, FooterState> {
    /**
     * Create a new instance of Footer.
     * @param props The properties.
     */
    constructor(props: FooterProps);
    /**
     * The component updated so rebuild the display.
     * @param prevProps The previous properties.
     */
    componentDidUpdate(prevProps: FooterProps): void;
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
    /**
     * Build the footer sections to display.
     * @param props The props.
     * @returns The footer sections.
     */
    private buildFooterSections;
}
