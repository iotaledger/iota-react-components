import React, { ReactNode } from "react";
import { TableBodyRowProps } from "./TableBodyRowProps";

/**
 * Component to create a TableBodyRow.
 */
export class TableBodyRow extends React.PureComponent<TableBodyRowProps> {
    /**
     * Create a new instance of TableBodyRow.
     * @param props The properties.
     */
    constructor(props: TableBodyRowProps) {
        super(props);
    }

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
