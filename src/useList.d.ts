declare type UseList<T> = [
    T[],
    {
        add: (value: T) => void;
        remove: (value: T) => void;
        removeByIndex: (index: number) => void;
        clear: () => void;
    }
];
declare const useList: <T>(initialValue: T[]) => UseList<T>;
export default useList;
