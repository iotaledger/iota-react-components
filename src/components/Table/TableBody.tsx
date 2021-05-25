import React, { ReactNode } from "react";
import { TableBodyProps } from "./TableBodyProps";

/**
 * Component to create a TableBody.
 */
export class TableBody extends React.PureComponent<TableBodyProps> {
    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        return (
            <tbody className="table-body">
                {this.props.children}
            </tbody>
        );
    }
}
