/**
 * Side Menu Item model.
 */
export interface SideMenuItem {
    /**
     * The name of the menu.
     */
    name?: string;

    /**
     * The link to open.
     */
    link?: string;

    /**
     * Is the menu entry expanded.
     */
    isExpanded?: boolean;

    /**
     * Child menu items.
     */
    items?: SideMenuItem[];
}
