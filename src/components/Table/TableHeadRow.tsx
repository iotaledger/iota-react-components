import React, { ReactNode } from "react";
import { TableHeadRowProps } from "./TableHeadRowProps";

/**
 * Component to create a TableHeadRow.
 */
export class TableHeadRow extends React.PureComponent<TableHeadRowProps> {
    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        return (
            <tr className="table-head-row">
                {this.props.children}
            </tr>
        );
    }
}
