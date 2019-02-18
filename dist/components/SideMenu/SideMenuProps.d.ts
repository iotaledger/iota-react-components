import * as H from "history";
import { SideMenuItem } from "./SideMenuItem";
export interface SideMenuProps {
    /**
     * The router history component.
     */
    history: H.History;
    /**
     * Is the menu open.
     */
    isMenuOpen: boolean;
    /**
     * The items for the menu.
     */
    items: SideMenuItem[];
    /**
     * The link that is the selected item.
     */
    selectedItemLink: string;
    /**
     * Side menu media query style.
     */
    mediaQuery?: string;
    /**
     * Side menu closed.
     */
    handleClose(): void;
}
