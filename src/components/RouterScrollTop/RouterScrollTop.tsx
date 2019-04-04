import React, { ReactNode } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { ScrollHelper } from "../../utils/scrollHelper";

/**
 * Component to scroll to the top of the page on router navigate.
 */
class RouterScrollTopWithoutRouter extends React.Component<RouteComponentProps<any>> {
    /**
     * The component updated.
     * @param prevProps The Previous props.
     */
    public componentDidUpdate(prevProps: any): void {
        if (this.props.location !== prevProps.location) {
            ScrollHelper.scrollRoot();
        }
    }

    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        return null;
    }
}

// tslint:disable-next-line:variable-name
export const RouterScrollTop = withRouter(RouterScrollTopWithoutRouter);
