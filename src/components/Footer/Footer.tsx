import React, { ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Heading } from "../Heading/Heading";
import { Link } from "../Link/Link";
import { Select } from "../Select/Select";
import { Text } from "../Text/Text";
import { FooterProps } from "./FooterProps.js";

/**
 * Component to display styled footer.
 */
export class Footer extends React.Component<FooterProps> {
    constructor(props: FooterProps) {
        super(props);
    }

    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        return (
            <footer className="footer">
                <div className="footer__wrapper">
                    <div className="footer-top-content">
                        {
                            this.props.sections.map(({ heading, links }) =>
                                <section key={heading} className="footer-top-content__wrapper">
                                    <Heading level={3} className="footer-top-content__heading">{heading}</Heading>
                                    {
                                        links.map(({ href, text }) =>
                                            <React.Fragment key={text}>
                                                {href.startsWith("http") && (
                                                    <Link
                                                        href={href}
                                                        className="footer-top-content__link"
                                                        target="_blank"
                                                    >
                                                        {text}
                                                    </Link>
                                                )}
                                                {!href.startsWith("http") && (
                                                    <RouterLink
                                                        to={href}
                                                        className="footer-top-content__link"
                                                    >
                                                        {text}
                                                    </RouterLink>
                                                )}
                                            </React.Fragment>
                                        )}
                                </section>
                            )}
                    </div>
                    <div className="footer-top-content__dropdown-wrapper">
                        <Heading level={3} className="footer-top-content__heading">Jump to a section</Heading>
                        <Select
                            onChange={(e) => this.handleClick(e.target.value)}
                            className="footer-top-content__dropdown"
                        >
                            <option value="">Select a topic</option>
                            {
                                this.props.sections.map(({ heading, links }) =>
                                    <optgroup key={heading} label={heading}>
                                        {
                                            links.map(({ href, text }) =>
                                                <option key={text} value={href}>{text}</option>
                                            )}
                                    </optgroup>
                                )}
                        </Select>
                    </div>
                    <div className="footer-bottom-content">
                        <section className="footer-bottom-content__wrapper">
                            {
                                this.props.staticContent.address.map((text, idx) =>
                                    <Text key={text} className="footer-bottom-content__item" isHtml={true}>
                                        {text}
                                    </Text>
                                )
                            }
                        </section>
                        <section className="footer-bottom-content__wrapper legal">
                            {
                                this.props.staticContent.legal.map((text, idx) =>
                                    <Text key={text} className="footer-bottom-content__item" isHtml={true}>
                                        {text}
                                    </Text>
                                )
                            }
                        </section>
                        <section className="footer-bottom-content__wrapper copyright">
                            {
                                this.props.staticContent.copyright.map(text =>
                                    <Text key={text} className="footer-bottom-content__item" isHtml={true}>
                                        {text}
                                    </Text>
                                )
                            }
                        </section>
                    </div>
                </div>
            </footer>
        );
    }

    /**
     * Handle the click from the select element in mobile view.
     * @param url The url to handle.
     */
    private handleClick(url: string): void {
        if (url.startsWith("http")) {
            window.open(url, "_blank");
        } else {
            this.props.history.push(url);
        }
    }
}
