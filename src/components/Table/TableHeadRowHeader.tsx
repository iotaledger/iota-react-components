import classNames from "classnames";
import React, { ReactNode } from "react";
import { TableHeadRowHeaderProps } from "./TableHeadRowHeaderProps";

/**
 * Component to create a TableHeadRowHeader.
 */
export class TableHeadRowHeader extends React.PureComponent<TableHeadRowHeaderProps> {
    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        return (
            <th
                className={
                    classNames(
                        "table-head-row--item",
                        { "table-head-row-item--center": this.props.align === "center" },
                        { "table-head-row-item--right": this.props.align === "right" }
                    )
                }
            >
                {this.props.children}
            </th>
        );
    }
}
