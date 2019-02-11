import React, { Component, ReactNode } from "react";
import { PaginationInfoProps } from "./PaginationInfoProps";
import { PaginationInfoState } from "./PaginationInfoState";

/**
 * Class PaginationInfo.
 */
export class PaginationInfo extends Component<PaginationInfoProps, PaginationInfoState> {
    /**
     * Create a new instance of PaginationInfo.
     * @param props The properties.
     * @param context The context.
     */
    constructor(props: PaginationInfoProps, context: {}) {
        super(props, context);

        this.state = {
            pageInfo: this.calculatePaginationInfo()
        };
    }

    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        return (
            <div className="pagination-info">
                <div className="pagination-info--text">
                    {this.state.pageInfo}
                </div>
                {this.props.children}
            </div>
        );
    }

    /**
     * Calculate the pagination info for the pages.
     * @returns The pagination info.
     */
    private calculatePaginationInfo(): string {
        const totalPages = Math.ceil(this.props.totalItems / this.props.pageSize);
        let itemsOnPage;
        if (this.props.page === totalPages - 1) {
          itemsOnPage = this.props.totalItems % this.props.pageSize;
          if (itemsOnPage === 0)   {
              itemsOnPage = this.props.pageSize;
          }
        } else {
            itemsOnPage = this.props.pageSize;
        }
        const firstItem = (this.props.page * this.props.pageSize) + 1;
        const lastItem = (this.props.page * this.props.pageSize) + itemsOnPage;

        return this.props.totalItems > 0 ?
            `Items ${firstItem} to ${lastItem} of ${this.props.totalItems}`
            : "No Items";
    }
}
