/**
 * State for the footer component.
 */
export interface FooterState {
    /**
     * Section to display in the footer.
     */
    footerSections: {
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
}
