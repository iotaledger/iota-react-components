import React, { ReactNode } from "react";
import { TableBodyRowHeaderProps } from "./TableBodyRowHeaderProps";

/**
 * Component to create a TableBodyRowHeader.
 */
export class TableBodyRowHeader extends React.PureComponent<TableBodyRowHeaderProps> {
    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        return (
            <th className="table-body-row--header">
                {this.props.children}
            </th>
        );
    }
}
