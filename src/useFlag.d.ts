export default function useFlag(initialValue: boolean): [
    boolean,
    {
        set: (value: boolean) => void;
        toggle: () => void;
        toggleTnB: (time: number) => void;
    }
];
