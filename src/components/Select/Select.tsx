import React, { Component, ReactNode } from "react";
import { SelectProps } from "./SelectProps";

/**
 * Class Select.
 */
export class Select extends Component<SelectProps> {
    /**
     * Create a new instance of Select.
     * @param props The properties.
     * @param context The context.
     */
    constructor(props: SelectProps, context: {}) {
        super(props, context);
    }

    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        return (
            <div className="select-wrapper">
                <select {...this.props} />
            </div>
        );
    }
}
