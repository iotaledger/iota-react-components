import classNames from "classnames";
import React, { ReactNode } from "react";
import { SideMenuProps } from "./SideMenuProps";
import { SideMenuState } from "./SideMenuState";
import { SideMenuStateItem } from "./SideMenuStateItem";

/**
 * Component to display a styled side menu.
 */
export class SideMenu extends React.Component<SideMenuProps, SideMenuState> {
    /**
     * Handle key down handler;
     */
    private readonly _handleKeyDown: (event: KeyboardEvent) => void;

    /**
     * Create a new instance of SideMenu.
     * @param props The props.
     */
    constructor(props: SideMenuProps) {
        super(props);

        this.state = {
            items: this.createStateItems()
        };

        this._handleKeyDown = (event) => this.handleKeyDown(event);
    }

    /**
     * The component mounted.
     */
    public componentDidMount(): void {
        document.addEventListener("keydown", this._handleKeyDown, false);
    }

    /**
     * The component will unmount from the dom.
     */
    public componentWillUnmount(): void {
        document.removeEventListener("keydown", this._handleKeyDown, false);
    }

    /**
     * The component will receive properties.
     * @param nextProps The next props.
     */
    public componentWillReceiveProps(nextProps: SideMenuProps): void {
        document.body.classList.toggle("no-scroll", nextProps.isMenuOpen);
    }

    /**
     * The component updates.
     * @param prevProps The previous props.
     */
    public componentDidUpdate(prevProps: SideMenuProps): void {
        if (this.props.selectedItemLink !== prevProps.selectedItemLink) {
            this.setState({
                items: this.createStateItems()
            });
        }
    }

    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        return (
            <div className={this.props.mediaQuery}>
                {this.props.isMenuOpen && (
                    <div className="side-menu__overlay" onClick={() => this.handleCloseClick()} role="button" />
                )}
                <section
                    className={classNames(
                        "side-menu",
                        { "side-menu__shown": this.props.isMenuOpen },
                        { "side-menu__hidden": !this.props.isMenuOpen }
                    )}
                >
                    <h4 className="side-menu__caption">
                        <span>Navigation</span>
                        <button className="side-menu__close" onClick={() => this.handleCloseClick()} />
                    </h4>

                    {this.state.items.map((menuItem, index) => (
                        <section
                            key={index}
                            className={classNames(
                                "side-menu__group",
                                { "side-menu__group--expanded": menuItem.isExpanded },
                                { "side-menu__group--selected": menuItem.isSelected }
                            )}
                        >
                            <h5 className="side-menu__heading" onClick={() => this.handleHeadingClick(index)}>
                                <span>{menuItem.name}</span>
                            </h5>
                            <div className="side-menu__list">
                                {menuItem.items && menuItem.items.map((menuListItem, miIndex) => (
                                    <React.Fragment key={miIndex}>
                                        <div className="side-menu__sub-list">
                                            {menuListItem.name && (
                                                <div className="side-menu-item__header">{menuListItem.name}</div>
                                            )}
                                            <ul>
                                                {menuListItem.items && menuListItem.items.map((subItem, idx) => (
                                                    <li
                                                        key={idx}
                                                        className={classNames(
                                                            "side-menu-item",
                                                            { "side-menu-item--active": subItem.isSelected }
                                                        )}
                                                    >
                                                        <a
                                                            onClick={() => this.handleClick(subItem.link)}
                                                            className={classNames({ "side-menu-item--active": subItem.isSelected })}
                                                            role="link"
                                                        >
                                                            {subItem.name}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </React.Fragment>
                                ))}
                            </div>
                        </section>))
                    }
                </section>
            </div>
        );
    }

    /**
     * Handle closing the menu.
     */
    private handleCloseClick(): void {
        if (this.props.isMenuOpen && this.props.handleClose) {
            document.body.classList.toggle("no-scroll", false);
            this.props.handleClose();
        }
    }

    /**
     * Handle any key presses.
     * @param event The key press event.
     */
    private handleKeyDown(event: KeyboardEvent): void {
        if (event.keyCode === 27) {
            this.handleCloseClick();
        }
    }

    /**
     * Handle a header being clicked.
     * @param index The index of the header that was clicked.
     */
    private handleHeadingClick(index: number): void {
        this.setState({
            items: this.state.items.map((item, ind) =>
                (ind === index ?
                    { ...item, isExpanded: !item.isExpanded } :
                    { ...item, isExpanded: false }
                ))
        });
    }

    /**
     * Handle the click from the select element in mobile view.
     * @param url The url to handle.
     */
    private handleClick(url?: string): void {
        if (url) {
            if (url.startsWith("http")) {
                window.open(url, "_blank");
            } else {
                this.props.history.push(url);
            }
            this.handleCloseClick();
        }
    }

    /**
     * Create state menu entries from the props.
     * @returns The state menu items.
     */
    private createStateItems(): SideMenuStateItem[] {
        const stateItems: SideMenuStateItem[] = [];

        for (let i = 0; i < this.props.items.length; i++) {
            const propHeader = this.props.items[i];

            const stateHeader: SideMenuStateItem  = {
                name: propHeader.name,
                link: propHeader.link,
                isExpanded: propHeader.isExpanded,
                items: []
            };

            if (propHeader.items && stateHeader.items) {
                for (let j = 0; j < propHeader.items.length; j++) {
                    const propSection = propHeader.items[j];

                    const stateSection: SideMenuStateItem = {
                        name: propSection.name,
                        link: propSection.link,
                        isExpanded: propSection.isExpanded,
                        items: []
                    };

                    if (propSection.items && stateSection.items) {
                        for (let k = 0; k < propSection.items.length; k++) {
                            const propItem = propSection.items[k];

                            const stateItem: SideMenuStateItem  = {
                                name: propItem.name,
                                link: propItem.link,
                                isExpanded: propItem.isExpanded,
                                isSelected: propItem.link === this.props.selectedItemLink
                            };

                            stateSection.items.push(stateItem);
                        }
                        stateSection.isSelected = stateSection.items.findIndex(item => item.isSelected === true) >= 0;
                    }

                    stateHeader.items.push(stateSection);
                }
                stateHeader.isSelected = stateHeader.items.findIndex(item => item.isSelected === true) >= 0;
            }

            stateItems.push(stateHeader);
        }

        return stateItems;
    }
}
