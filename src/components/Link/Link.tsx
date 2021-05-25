import React, { ReactNode } from "react";
import { LinkProps } from "./LinkProps";

/**
 * Component to create a link.
 */
export class Link extends React.PureComponent<LinkProps> {
    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        return (
            <a
                id={this.props.id}
                target={this.props.target}
                href={this.props.href}
                rel={this.props.target === "_blank" ? "noopener noreferrer" : ""}
                className={`link ${this.props.className}`}
            >
                {this.props.children}
            </a>
        );
    }
}
