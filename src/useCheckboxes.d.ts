declare type UseCheckbox = {
    data: CheckboxesState;
    set: (id: string, value: boolean) => void;
    setAll: (value: boolean) => void;
    toggle: (id: string) => void;
    toggleAll: () => void;
    isEnabled: (id: string) => boolean;
    isEnabledAll: () => {
        enabled: boolean;
        partial: boolean;
    };
    getSelected: () => string[];
    getNotSelected: () => string[];
};
declare type CheckboxesState = {
    [key: string]: boolean;
};
declare type Item = {
    id: string;
};
declare const useCheckboxes: (list: Item[]) => UseCheckbox;
export default useCheckboxes;
