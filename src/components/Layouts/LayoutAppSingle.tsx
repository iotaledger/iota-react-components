import React, { ReactNode } from "react";
import { LayoutAppSingleProps } from "./LayoutAppSingleProps";

/**
 * Component to display single app layout.
 */
export class LayoutAppSingle extends React.PureComponent<LayoutAppSingleProps> {
    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        return (
            <div className="layouts--app-single">
                <div className="column">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
