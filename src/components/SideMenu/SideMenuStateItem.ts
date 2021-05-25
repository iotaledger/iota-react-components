/**
 * State for Side Menu Item.
 */
export interface SideMenuStateItem {
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
     * Is the menu entry selected.
     */
    isSelected?: boolean;

    /**
     * Child menu items.
     */
    items?: SideMenuStateItem[];
}
