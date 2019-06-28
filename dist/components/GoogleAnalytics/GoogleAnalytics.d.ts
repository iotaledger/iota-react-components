import React, { ReactNode } from "react";
import { GoogleAnalyticsProps } from "./GoogleAnalyticsProps";
/**
 * Component to add a google analytics link.
 */
export declare class GoogleAnalyticsWithoutRouter extends React.Component<GoogleAnalyticsProps> {
    /**
     * The last sent location.
     */
    private _lastSent?;
    /**
     * Create a new instance of GoogleAnalytics.
     * @param props The props.
     */
    constructor(props: GoogleAnalyticsProps);
    /**
     * The component mounted.
     */
    componentDidMount(): void;
    /**
     * The component updated so load the script if the id is set.
     * @param prevProps The previous properties.
     */
    componentDidUpdate(prevProps: GoogleAnalyticsProps): void;
    /**
     * Render the component.
     * @returns The node to render.
     */
    render(): ReactNode;
    /**
     * Log a page view to the analytics.
     * @param location The location to log.
     */
    private pageView;
}
export declare const GoogleAnalytics: React.ComponentClass<Pick<GoogleAnalyticsProps, "id">, any>;
