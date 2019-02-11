import classNames from "classnames";
import React, { ReactNode } from "react";
import { TableProps } from "./TableProps";

/**
 * Component to create a Table.
 */
export class Table extends React.PureComponent<TableProps> {
    /**
     * Create a new instance of Table.
     * @param props The properties.
     */
    constructor(props: TableProps) {
        super(props);
    }

    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        return (
            <table
                className={
                    classNames(
                        "table",
                        { "table--compact": this.props.compact }
                    )
                }
            >
                {this.props.children}
            </table>
        );
    }
}
