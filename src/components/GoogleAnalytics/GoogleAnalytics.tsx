import React, { ReactNode } from "react";
import { GoogleAnalyticsProps } from "./GoogleAnalyticsProps";

/**
 * Component to add a google analytics link.
 */
export class GoogleAnalytics extends React.PureComponent<GoogleAnalyticsProps> {
    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        if (!this.props.id) {
            return null;
        }

        const src = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${this.props.id}');
`;

        // tslint:disable:react-no-dangerous-html
        return (
            <React.Fragment>
                <script async={true} src={`https://www.googletagmanager.com/gtag/js?id=${this.props.id}`} />
                <script dangerouslySetInnerHTML={{ __html: src }} />
            </React.Fragment>);
    }
}
