declare const useEventOnToggle: (element: HTMLElement | Document | null, dependency: boolean, type: keyof HTMLElementEventMap, listener?: ((this: HTMLInputElement, ev: Event) => any) | undefined, options?: boolean | AddEventListenerOptions | undefined) => void;
export default useEventOnToggle;
