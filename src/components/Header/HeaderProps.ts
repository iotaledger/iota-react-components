import { IFoundationData } from "../../models/IFoundationData";

export interface HeaderProps {
    /**
     * The title to display in the header.
     */
    title: string;

    /**
     * The logo to display in the header.
     */
    logo: any;

    /**
     * The links to display at the top of the header.
     */
    topLinks?: {
        /**
         * The text for the link.
         */
        text: string;
        /**
         * The url for the link.
         */
        href: string;
    }[];

    /**
     * Foundation data as a source instead of topLinks.
     */
    foundationData?: IFoundationData;

    /**
     * Display the header in compact style.
     */
    compact?: boolean;

    /**
     * Hamburger media query style.
     */
    hamburgerMediaQuery?: string;

    /**
     * Callback for the hamburger menu being clicked.
     */
    hamburgerClick?(): void;
}
