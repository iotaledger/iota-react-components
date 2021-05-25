import React, { ReactNode } from "react";
import { TableHeadProps } from "./TableHeadProps";

/**
 * Component to create a TableHead.
 */
export class TableHead extends React.PureComponent<TableHeadProps> {
    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        return (
            <thead className="table-head">
                {this.props.children}
            </thead>
        );
    }
}
