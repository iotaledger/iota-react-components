import React, { ReactNode } from "react";
import { HotJarProps } from "./HotJarProps";

/**
 * Component to add a hot jar script.
 */
export class HotJar extends React.PureComponent<HotJarProps> {
    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        if (!this.props.id) {
            return null;
        }

        // tslint:disable:react-no-dangerous-html
        const src = `(function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:${this.props.id},hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`;

        return <script dangerouslySetInnerHTML={{ __html: src }} />;
    }
}
