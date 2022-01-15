import { TUseToggleOutput } from './types';
declare const someTestFc: () => void;
declare const useToggle: <T>(initialValue: boolean, initialData?: T | undefined) => TUseToggleOutput<T>;
export default useToggle;
export * from './types';
export { someTestFc, };
