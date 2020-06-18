import React, { ReactNode } from "react";
import { HeaderProps } from "./HeaderProps";
import { HeaderState } from "./HeaderState";
/**
 * Component to display a styled header.
 */
export declare class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps);
    /**
     * The component updated so rebuild the display.
     * @param prevProps The previous properties.
     */
    componentDidUpdate(prevProps: HeaderProps): void;
    /**
     * Render the component.
     * @returns The node to render.
     */
    render(): ReactNode;
    /**
     * Build the top links from data or foundation.
     * @param props The props.
     * @returns The top header links.
     */
    private buildTopLinks;
}
