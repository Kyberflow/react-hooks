export declare enum Key {
    Q = "KeyQ",
    W = "KeyW",
    E = "KeyE",
    R = "KeyR",
    T = "KeyT",
    Y = "KeyY",
    U = "KeyU",
    I = "KeyI",
    O = "KeyO",
    P = "KeyP",
    A = "KeyA",
    S = "KeyS",
    D = "KeyD",
    F = "KeyF",
    G = "KeyG",
    H = "KeyH",
    J = "KeyJ",
    K = "KeyK",
    L = "KeyL",
    Z = "KeyZ",
    X = "KeyX",
    C = "KeyC",
    V = "KeyV",
    B = "KeyB",
    N = "KeyN",
    M = "KeyM"
}
export declare enum Mod {
    Alt = "altKey",
    Opt = "altKey",
    Ctrl = "ctrlKey",
    Cmd = "metaKey",
    Shift = "shiftKey"
}
interface IHandler {
    key: Key;
    mods?: Mod[];
    handler: (e: KeyboardEvent) => void;
}
declare const useShortcuts: (handlers: IHandler[], element?: HTMLElement | Document) => void;
export default useShortcuts;
