import React, { Key } from "react";
import { IFoundationData } from "../models/IFoundationData";
/**
 * Class to help with foundation data.
 */
export declare class FoundationDataHelper {
    /**
     * The location of the foundation data.
     */
    static FOUNDATION_DATA_URL: string;
    /**
     * Cached version of the data.
     */
    private static _foundationData;
    /**
     * Load the found data.
     * @returns The loaded foundation data.
     */
    static loadData(): Promise<IFoundationData | undefined>;
    /**
     * Create the display for a value.
     * @param info The information to display.
     * @param key The key of the item.
     * @returns The element to display.
     */
    static createValue(info: {
        /**
         * The label for the information.
         */
        label: string;
        /**
         * The optional value for the information.
         */
        value?: string;
        /**
         * The optional urls.
         */
        urls?: {
            /**
             * The label for the link.
             */
            label: string;
            /**
             * The url to link to.
             */
            url: string;
        }[];
    }, key?: Key): React.ReactNode;
    /**
     * Build lines to display.
     * @param content The content to display.
     * @returns The element to display.
     */
    static buildLines(content: string | string[]): string;
    /**
     * Build link as either local or external.
     * @param url The url to create.
     * @param value The label for the link.
     * @param key The key of the item.
     * @returns The created link element.
     */
    static buildLink(url: string, value: string | string[], key?: Key): React.ReactNode;
}
