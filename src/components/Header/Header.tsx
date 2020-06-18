import classNames from "classnames";
import React, { ReactNode } from "react";
import { HeaderProps } from "./HeaderProps";
import { HeaderState } from "./HeaderState";

/**
 * Component to display a styled header.
 */
export class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props);

        this.state = {
            topLinks: this.buildTopLinks(props)
        };
    }

    /**
     * The component updated so rebuild the display.
     * @param prevProps The previous properties.
     */
    public componentDidUpdate(prevProps: HeaderProps): void {
        if (this.props.foundationData !== prevProps.foundationData) {
            this.setState({
                topLinks: this.buildTopLinks(this.props)
            });
        }
    }

    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        return (
            <header className={classNames("header", { compact: this.props.compact })}>
                <div className="header__wrapper">
                    <section className="header__head">
                        <a href="/">
                            <img className="header__brand" src={this.props.logo} alt="IOTA" />
                        </a>
                        <div>
                            <div className="top-header">
                                <ul className="top-header__items">
                                    {this.state.topLinks.map((title, index) =>
                                        (<li key={index} className="top-header__item">
                                            <a
                                                href={title.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {title.text}
                                            </a>
                                        </li>)
                                    )}
                                </ul>
                            </div>
                            {this.props.hamburgerClick && (
                                <button
                                    className={
                                        classNames(
                                            "header__icon",
                                            this.props.hamburgerMediaQuery
                                        )
                                    }
                                    onClick={() => this.props.hamburgerClick && this.props.hamburgerClick()}
                                />
                            )}
                        </div>
                    </section>
                    <section className="header__body">
                        <span className="header__title text text--level1 text--secondary">{this.props.title}</span>
                        {this.props.children}
                    </section>
                </div>
            </header>
        );
    }

    /**
     * Build the top links from data or foundation.
     * @param props The props.
     * @returns The top header links.
     */
    private buildTopLinks(props: HeaderProps): {
        /**
         * The text for the link.
         */
        text: string;
        /**
         * The url for the link.
         */
        href: string;
    }[] {
        return props.topLinks ? props.topLinks :
            props.foundationData && props.foundationData.sites ?
                props.foundationData.sites.map(s => ({
                    text: s.label,
                    href: s.url
                })) : [];
    }
}
