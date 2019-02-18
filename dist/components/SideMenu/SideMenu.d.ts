import React, { ReactNode } from "react";
import { SideMenuProps } from "./SideMenuProps";
import { SideMenuState } from "./SideMenuState";
/**
 * Component to display a styled side menu.
 */
export declare class SideMenu extends React.Component<SideMenuProps, SideMenuState> {
    /**
     * Handle key down handler;
     */
    private readonly _handleKeyDown;
    /**
     * Create a new instance of SideMenu.
     * @param props The props.
     */
    constructor(props: SideMenuProps);
    /**
     * The component mounted.
     */
    componentDidMount(): void;
    /**
     * The component will unmount from the dom.
     */
    componentWillUnmount(): void;
    /**
     * The component will receive properties.
     * @param nextProps The next props.
     */
    componentWillReceiveProps(nextProps: SideMenuProps): void;
    /**
     * The component updates.
     * @param prevProps The previous props.
     */
    componentDidUpdate(prevProps: SideMenuProps): void;
    /**
     * Render the component.
     * @returns The node to render.
     */
    render(): ReactNode;
    /**
     * Handle closing the menu.
     */
    private handleCloseClick;
    /**
     * Handle any key presses.
     * @param event The key press event.
     */
    private handleKeyDown;
    /**
     * Handle a header being clicked.
     * @param index The index of the header that was clicked.
     */
    private handleHeadingClick;
    /**
     * Handle the click from the select element in mobile view.
     * @param url The url to handle.
     */
    private handleClick;
    /**
     * Create state menu entries from the props.
     * @returns The state menu items.
     */
    private createStateItems;
}
