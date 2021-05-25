import React, { ReactNode } from "react";
import { TableBodyRowProps } from "./TableBodyRowProps";

/**
 * Component to create a TableBodyRow.
 */
export class TableBodyRow extends React.PureComponent<TableBodyRowProps> {
    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        return (
            <tr className="table-body-row">
                {this.props.children}
            </tr>
        );
    }
}
