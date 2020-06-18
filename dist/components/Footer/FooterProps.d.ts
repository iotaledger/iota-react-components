import * as H from "history";
import { IFoundationData } from "../../models/IFoundationData";
export interface FooterProps {
    /**
     * The router history component.
     */
    history: H.History;
    /**
     * Section to display in the footer.
     */
    sections?: {
        /**
         * The heading for the section.
         */
        heading: string;
        /**
         * The links for the section.
         */
        links: {
            /**
             * The url for the link.
             */
            href: string;
            /**
             * The text for the link.
             */
            text: string;
        }[];
    }[];
    /**
     * The static content for the footer.
     */
    staticContent?: {
        /**
         * The address content.
         */
        address: string[];
        /**
         * The legal content.
         */
        legal: string[];
        /**
         * The copyright content.
         */
        copyright: string[];
    };
    /**
     * Foundation data as a source instead of staticContent, sections.
     */
    foundationData?: IFoundationData;
}
