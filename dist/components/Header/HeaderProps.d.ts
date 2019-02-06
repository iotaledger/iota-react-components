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
    topLinks: {
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
     * Display the header in compact style.
     */
    compact?: boolean;
}