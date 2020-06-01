import React, { ReactNode } from "react";
import { RouteComponentProps } from "react-router-dom";
/**
 * Component to scroll to the top of the page on router navigate.
 */
declare class RouterScrollTopWithoutRouter extends React.Component<RouteComponentProps<any>> {
    /**
     * The component updated.
     * @param prevProps The Previous props.
     */
    componentDidUpdate(prevProps: any): void;
    /**
     * Render the component.
     * @returns The node to render.
     */
    render(): ReactNode;
}
export declare const RouterScrollTop: React.ComponentClass<Pick<RouteComponentProps<any, import("react-router").StaticContext, any>, never>, any> & import("react-router").WithRouterStatics<typeof RouterScrollTopWithoutRouter>;
export {};
