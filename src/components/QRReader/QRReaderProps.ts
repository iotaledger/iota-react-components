export interface QRReaderProps {
    /**
     * How should we display the reader.
     */
    displayMode: "inline" | "fill";

    /**
     * Data from the qr reader.
     */
    onData(data?: any): void;
}
