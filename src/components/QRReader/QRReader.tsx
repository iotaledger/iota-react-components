import React, { Component, ReactNode } from "react";
import QrReader from "react-qr-reader";
import { Button } from "../Button/Button";
import { Fieldset } from "../Fieldset/Fieldset";
import { Form } from "../Form/Form";
import { Heading } from "../Heading/Heading";
import { Select } from "../Select/Select";
import "./QRReader.scss";
import { QRReaderProps } from "./QRReaderProps";
import { QRReaderState } from "./QRReaderState";

/**
 * Component which will view display a QR reader.
 */
export class QRReader extends Component<QRReaderProps, QRReaderState> {
    /**
     * Create a new instance of GenerateCertificate.
     * @param props The props.
     */
    constructor(props: QRReaderProps) {
        super(props);

        this.state = {
            facingMode: "environment"
        };
    }

    /**
     * The component mounted.
     */
    public async componentDidMount(): Promise<void> {
        let qrCameraFacingMode = await this.retrieve<"environment" | "user">("qrCameraFacingMode");
        qrCameraFacingMode = qrCameraFacingMode || "environment";

        this.setState({
            facingMode: qrCameraFacingMode
        });

        document.body.classList.toggle("no-scroll", true);
    }

    /**
     * The component will unmount so add back doc scroll.
     */
    public componentWillUnmount(): void {
        document.body.classList.toggle("no-scroll", false);
    }

    /**
     * Handle the scanner data.
     * @param data The data.
     */
    public handleScan(data: any): void {
        if (data !== null) {
            this.props.onData(data);
        }
    }

    /**
     * Handle error from scanner.
     */
    public handleError(): void {
    }

    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        return (
            <div className="qr-reader">
                <div className="qr-reader-overlay" />
                <Heading level={1} className="text--tertiary">QR Scanner</Heading>
                <p>When the QR is detected the scanner will automatically close.</p>
                <Form>
                    <Fieldset>
                        <label>Camera</label>
                        <Select
                            value={this.state.facingMode}
                            onChange={(e) =>
                                this.setState(
                                    { facingMode: (e.target.value as "environment" | "user") },
                                    async () =>
                                        this.store<string>("qrCameraFacingMode", this.state.facingMode).catch((err) => { })
                                )}
                        >
                            <option value="environment">Environment</option>
                            <option value="user">User</option>
                        </Select>
                    </Fieldset>
                </Form>
                <QrReader
                    facingMode={this.state.facingMode}
                    className="qr-reader-scan"
                    delay={300}
                    onError={() => this.handleError()}
                    onScan={(data) => this.handleScan(data)}
                />
                <Button color="primary" onClick={() => this.handleScan(undefined)}>Close</Button>
            </div>
        );
    }

    /**
     * Store something in the local storage.
     * @param name The name of the item to store.
     * @param data The name of the item to store.
     * @returns Nothing.
     */
    public async store<T>(name: string, data: T): Promise<void> {
        try {
            if (window.localStorage) {
                window.localStorage.setItem(name, JSON.stringify(data));
            }
        } catch (err) {
        }
    }

    /**
     * Retrieve something from the local storage.
     * @param name The name of the item to store.
     * @returns The data or undefined if it does not exist.
     */
    public async retrieve<T>(name: string): Promise<T | undefined> {
        try {
            if (window.localStorage) {
                const data = window.localStorage.getItem(name);
                if (data) {
                    return JSON.parse(data);
                }
            }
        } catch (err) {
        }
    }
}
