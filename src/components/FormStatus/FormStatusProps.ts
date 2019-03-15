/**
 * The properties for the FormStatus component.
 */
export interface FormStatusProps {
    /**
     * The message to show.
     */
    message: string;

    /**
     * Show a spinner if busy.
     */
    isBusy?: boolean;

    /**
     * Show a success spinner.
     */
    isSuccess?: boolean;

    /**
     * Show in error state if failure.
     */
    isError?: boolean;

    /**
     * Should we fill the full width.
     */
    fullWidth?: boolean;
}
