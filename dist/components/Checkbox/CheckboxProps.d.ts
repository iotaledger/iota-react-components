/**
 * The properties for the Checkbox component.
 */
export interface CheckboxProps {
    /**
     * The label for the checkbox.
     */
    label: string;
    /**
     * Is the checkbox disabled.
     */
    disabled?: boolean;
    /**
     * The checked state of the button.
     */
    checked: boolean;
    /**
     * Event handler triggered on check.
     */
    onChange?(checked: boolean): void;
}
