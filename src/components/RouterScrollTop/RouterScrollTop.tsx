import React, { ReactNode } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { ScrollHelper } from "../../utils/scrollHelper";

/**
 * Component to scroll to the top of the page on router navigate.
 */
class RouterScrollTopWithoutRouter extends React.Component<RouteComponentProps<never>> {
    /**
     * The component updated.
     * @param prevProps The Previous props.
     */
    public componentDidUpdate(prevProps: RouteComponentProps<never>): void {
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

// eslint-disable-next-line @typescript-eslint/naming-convention
export const RouterScrollTop = withRouter(RouterScrollTopWithoutRouter);
