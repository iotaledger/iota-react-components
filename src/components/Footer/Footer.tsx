import React, { ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";
import { FoundationDataHelper } from "../../utils/foundationDataHelper";
import { Heading } from "../Heading/Heading";
import { Link } from "../Link/Link";
import { Select } from "../Select/Select";
import { Text } from "../Text/Text";
import { FooterProps } from "./FooterProps";
import { FooterState } from "./FooterState";

/**
 * Component to display styled footer.
 */
export class Footer extends React.Component<FooterProps, FooterState> {
    constructor(props: FooterProps) {
        super(props);

        this.state = {
            footerSections: this.buildFooterSections(props)
        };
    }

    /**
     * The component updated so rebuild the display.
     * @param prevProps The previous properties.
     */
    public componentDidUpdate(prevProps: FooterProps): void {
        if (this.props.foundationData !== prevProps.foundationData) {
            this.setState({
                footerSections: this.buildFooterSections(this.props)
            });
        }
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
                            this.state.footerSections.map(({ heading, links }) =>
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
                            onChange={e => this.handleClick(e.target.value)}
                            className="footer-top-content__dropdown"
                        >
                            <option value="">Select a section</option>
                            {
                                this.state.footerSections.map(({ heading, links }) =>
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
                        {this.props.foundationData && (
                            <React.Fragment>
                                <section className="footer-bottom-content__wrapper">
                                    {
                                        this.props.foundationData.registeredAddress.value.map((text, idx) =>
                                            <Text key={idx} className="footer-bottom-content__item" isHtml={true}>
                                                {text}
                                            </Text>
                                        )
                                    }
                                </section>
                                <section className="footer-bottom-content__wrapper">
                                    {
                                        this.props.foundationData.information.map((item, idx) =>
                                            <span key={idx} className="text footer-bottom-content__item">
                                                {FoundationDataHelper.createValue(item)}
                                            </span>
                                        )
                                    }
                                </section>
                            </React.Fragment>
                        )}
                        {this.props.staticContent && (
                            <React.Fragment>
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
                            </React.Fragment>
                        )}
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

    /**
     * Build the footer sections to display.
     * @param props The props.
     * @returns The footer sections.
     */
    private buildFooterSections(props: FooterProps): {
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
    }[] {
        let footerSections: {
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
        }[] = [];

        if (props.sections) {
            footerSections = footerSections.concat(props.sections);
        }

        if (props.foundationData && props.foundationData.footerSections) {
            for (const section of props.foundationData.footerSections) {
                footerSections.push({
                    heading: section.label,
                    links: section.items.map(i => ({
                        href: i.url,
                        text: i.label
                    }))
                });
            }
        }

        return footerSections;
    }
}
