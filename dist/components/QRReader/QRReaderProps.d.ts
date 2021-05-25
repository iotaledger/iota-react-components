/**
 * Properties for QR Reader.
 */
export interface QRReaderProps {
    /**
     * How should we display the reader.
     */
    displayMode: "inline" | "fill";
    /**
     * Data from the qr reader.
     */
    onData(data?: unknown): void;
}
