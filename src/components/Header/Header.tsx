import classNames from "classnames";
import React, { ReactNode } from "react";
import { HeaderProps } from "./HeaderProps";

/**
 * Component to display a styled header.
 */
export class Header extends React.Component<HeaderProps> {
    constructor(props: HeaderProps) {
        super(props);
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
                                    {this.props.topLinks.map((title, index) =>
                                        (<li key={index} className="top-header__item">
                                            <a href={title.href} target="_blank" rel="noopener noreferrer">{title.text}</a>
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
}
