import React, { ReactNode } from "react";
import { TableBodyRowDataProps } from "./TableBodyRowDataProps";
import { TableBodyRowDataState } from "./TableBodyRowDataState";
/**
 * Component to create a TableBodyRowData.
 */
export declare class TableBodyRowData extends React.PureComponent<TableBodyRowDataProps, TableBodyRowDataState> {
    /**
     * Create a new instance of TableBodyRowData.
     * @param props The properties.
     */
    constructor(props: TableBodyRowDataProps);
    /**
     * The component mounted.
     */
    componentDidMount(): void;
    /**
     * Render the component.
     * @returns The node to render.
     */
    render(): ReactNode;
}
