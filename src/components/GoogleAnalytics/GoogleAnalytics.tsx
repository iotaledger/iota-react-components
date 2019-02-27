import * as H from "history";
import React, { ReactNode } from "react";
import { withRouter } from "react-router";
import { GoogleAnalyticsProps } from "./GoogleAnalyticsProps";

/**
 * Component to add a google analytics link.
 */
export class GoogleAnalyticsWithoutRouter extends React.Component<GoogleAnalyticsProps> {
    /**
     * The last sent location.
     */
    private _lastSent?: string;
    /**
     * Create a new instance of GoogleAnalytics.
     * @param props The props.
     */
    constructor(props: GoogleAnalyticsProps) {
        super(props);
    }

    public componentDidMount(): void {
        this.props.history.listen(location => this.pageView(location));
    }

    /**
     * The component updated so load the script if the id is set.
     * @param prevProps The previous properties.
     */
    public componentDidUpdate(prevProps: GoogleAnalyticsProps): void {
        if (this.props.id !== prevProps.id && this.props.id) {
            const scriptGtag = document.createElement("script");
            scriptGtag.text = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
`;
            document.body.appendChild(scriptGtag);

            const script = document.createElement("script");
            script.onload = () => {
                this.pageView(this.props.location);
            };
            script.async = true;
            script.src = `https://www.googletagmanager.com/gtag/js?id=${this.props.id}`;
            document.body.appendChild(script);
        }
    }

    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        return null;
    }

    /**
     * Log a page view to the analytics.
     * @param location The location to log.
     */
    private pageView(location: H.Location): void {
        if (this.props.id) {
            const newLocation = location.pathname + location.search + location.hash;
            if (newLocation !== this._lastSent) {
                const gtag = (window as any).gtag;
                if (typeof gtag === "function") {
                    gtag("config", this.props.id, { page_path: newLocation });
                }
                this._lastSent = newLocation;
            }
        }
    }
}

// tslint:disable-next-line:variable-name
export const GoogleAnalytics = withRouter(GoogleAnalyticsWithoutRouter);
