import classNames from "classnames";
import React, { Component, ReactNode } from "react";
import { PaginationProps } from "./PaginationProps";
import { PaginationState } from "./PaginationState";

/**
 * Class Pagination.
 */
export class Pagination extends Component<PaginationProps, PaginationState> {
    /**
     * Create a new instance of Pagination.
     * @param props The properties.
     * @param context The context.
     */
    constructor(props: PaginationProps, context: {}) {
        super(props, context);

        this.state = {
            pages: this.calculatePagination()
        };
    }

    /**
     * Handle the cick event.
     * @param page The page that was clicked.
     */
    public handleClick(page: number): void {
        this.props.onChange(page);
    }

    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        return this.state.pages.length > 1 ? (
            <ul className="pagination">
                {this.state.pages.map(p => (
                    <li
                        className={
                            classNames(
                                "pagination-item",
                                { "pagination-item--selected": this.props.page === p - 1 }
                            )
                        }
                    >
                        {p === -1 && (
                            <span>...</span>
                        )}
                        {p !== -1 && (
                            <a onClick={() => this.handleClick(p - 1)} role="button">{p}</a>
                        )}
                    </li>
                ))}
            </ul>
        ) : null;
    }

    /**
     * Calcualte the pagination numbers.
     * @returns The array of page numbers.
     */
    private calculatePagination(): number[] {
        const current = this.props.page;
        const last = this.props.totalPages;
        const delta = this.props.delta || 2;
        const left = current - delta;
        const right = current + delta + 1;
        const range = [];
        const rangeWithDots = [];
        let l;

        for (let i = 1; i <= last; i++) {
            if (i === 1 || i === last || i >= left && i < right) {
                range.push(i);
            }
        }

        for (const i of range) {
            if (l) {
                if (i - l === 2) {
                    rangeWithDots.push(l + 1);
                } else if (i - l !== 1) {
                    rangeWithDots.push(-1);
                }
            }
            rangeWithDots.push(i);
            l = i;
        }

        return rangeWithDots;
    }
}
