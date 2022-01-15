declare const useEvent: (element: HTMLElement | Document | null, dependencies: any[], type: keyof HTMLElementEventMap, listener?: ((this: HTMLInputElement, ev: Event) => any) | undefined, options?: boolean | AddEventListenerOptions | undefined) => void;
export default useEvent;
