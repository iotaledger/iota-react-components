import { Component, ReactNode } from "react";
import "./QRReader.scss";
import { QRReaderProps } from "./QRReaderProps";
import { QRReaderState } from "./QRReaderState";
/**
 * Component which will view display a QR reader.
 */
export declare class QRReader extends Component<QRReaderProps, QRReaderState> {
    /**
     * Create a new instance of GenerateCertificate.
     * @param props The props.
     */
    constructor(props: QRReaderProps);
    /**
     * The component mounted.
     */
    componentDidMount(): Promise<void>;
    /**
     * The component will unmount so add back doc scroll.
     */
    componentWillUnmount(): void;
    /**
     * Handle the scanner data.
     * @param data The data.
     */
    handleScan(data: any): void;
    /**
     * Handle error from scanner.
     */
    handleError(): void;
    /**
     * Render the component.
     * @returns The node to render.
     */
    render(): ReactNode;
    /**
     * Store something in the local storage.
     * @param name The name of the item to store.
     * @param data The name of the item to store.
     * @returns Nothing.
     */
    store<T>(name: string, data: T): Promise<void>;
    /**
     * Retrieve something from the local storage.
     * @param name The name of the item to store.
     * @returns The data or undefined if it does not exist.
     */
    retrieve<T>(name: string): Promise<T | undefined>;
}
