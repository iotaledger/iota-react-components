import classNames from "classnames";
import React, { ReactNode } from "react";
import { HeadingProps } from "./HeadingProps";

/**
 * Component to display a styled heading.
 */
export class Heading extends React.PureComponent<HeadingProps> {
    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        return React.createElement(
            `h${this.props.level}`,
            {
                className: classNames("heading", this.props.className),
                id: this.props.id
            },
            this.props.children
        );
    }
}
