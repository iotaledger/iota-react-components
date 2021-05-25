import classNames from "classnames";
import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import { TableBodyRowDataProps } from "./TableBodyRowDataProps";
import { TableBodyRowDataState } from "./TableBodyRowDataState";

// tslint:disable:react-no-dangerous-html

/**
 * Component to create a TableBodyRowData.
 */
export class TableBodyRowData extends React.PureComponent<TableBodyRowDataProps, TableBodyRowDataState> {
    /**
     * Create a new instance of TableBodyRowData.
     * @param props The properties.
     */
    constructor(props: TableBodyRowDataProps) {
        super(props);

        this.state = {
            inlineHeader: ""
        };
    }

    /**
     * The component mounted.
     */
    public componentDidMount(): void {
        const thisDom = ReactDOM.findDOMNode(this) as HTMLTableCellElement;

        const tableRow = thisDom.parentElement as HTMLTableRowElement;

        if (tableRow) {
            const myIndex = Array.from(tableRow.children).indexOf(thisDom);

            if (myIndex >= 0) {
                const table = thisDom.closest("table") as HTMLTableElement;

                if (table?.tHead?.rows && table.tHead.rows.length > 0) {
                    const row = table.tHead.rows[0];

                    if (row?.children && row.children.length >= myIndex) {
                        this.setState({ inlineHeader: row.children[myIndex].innerHTML });
                    }
                }
            }
        }
    }

    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        return (
            <td
                className={
                    classNames(
                        "table-body-row--item",
                        { "table-body-row-item--center": this.props.align === "center" },
                        { "table-body-row-item--right": this.props.align === "right" }
                    )
                }
            >
                {this.state.inlineHeader && (
                    <React.Fragment>
                        <span
                            className="table-body-row-item--inline-header"
                            dangerouslySetInnerHTML={{ __html: this.state.inlineHeader }}
                        />
                        <span>{this.props.children}</span>
                    </React.Fragment>
                )}
                {!this.state.inlineHeader && this.props.children}
            </td>
        );
    }
}
