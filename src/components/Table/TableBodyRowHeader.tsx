import React, { ReactNode } from "react";
import { TableBodyRowHeaderProps } from "./TableBodyRowHeaderProps";

/**
 * Component to create a TableBodyRowHeader.
 */
export class TableBodyRowHeader extends React.PureComponent<TableBodyRowHeaderProps> {
    /**
     * Create a new instance of TableBodyRowHeader.
     * @param props The properties.
     */
    constructor(props: TableBodyRowHeaderProps) {
        super(props);
    }

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
