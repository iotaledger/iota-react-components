import React, { ReactNode } from "react";
import { TableHeadRowProps } from "./TableHeadRowProps";

/**
 * Component to create a TableHeadRow.
 */
export class TableHeadRow extends React.PureComponent<TableHeadRowProps> {
    /**
     * Create a new instance of TableHeadRow.
     * @param props The properties.
     */
    constructor(props: TableHeadRowProps) {
        super(props);
    }

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
