declare type UseFormResponse = {
    data: {
        [key: string]: any;
    };
    errors: {
        [key: string]: string[];
    };
    edit: (name: string) => (value: string) => void;
    patch: (patchData: {
        [key: string]: any;
    }) => void;
    clear: () => void;
    isValid: (name?: string) => boolean;
};
interface Validator {
    check: (value: any) => boolean;
    message: string;
}
export declare const VALIDATORS: {
    NOT_EMPTY_STRING: (name: string) => Validator;
    VALID_EMAIL: () => Validator;
    VALID_PASSWORD: () => Validator;
};
declare const useForm: (initialData: {
    [key: string]: any;
}, validators?: {
    [key: string]: Validator[];
} | undefined) => UseFormResponse;
export default useForm;
