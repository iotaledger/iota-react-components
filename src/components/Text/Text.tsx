import classNames from "classnames";
import React, { ReactNode } from "react";
import { TextProps } from "./TextProps";

/**
 * Component to display styled text.
 */
export class Text extends React.PureComponent<TextProps> {
    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        if (this.props.isHtml) {
            // tslint:disable-next-line:react-no-dangerous-html
            return <span className={classNames("text", this.props.className)} dangerouslySetInnerHTML={{ __html: (this.props.children as string) }} />;
        }

        return (<span className={classNames("text", this.props.className)}>{this.props.children}</span>);
    }
}
