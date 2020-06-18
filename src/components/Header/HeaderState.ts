export interface HeaderState {
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
}
