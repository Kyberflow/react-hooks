interface IUseToggleActions<T> {
  set: (value: boolean, data: T) => void;
  enable: () => void;
  disable: () => void;
  toggle: () => void;
  toggleThereAndBack: (ms: number) => void;
}

type TUseToggleOutput<T> = [
  boolean,
  IUseToggleActions<T>,
  T | undefined,
]

export {
  TUseToggleOutput,
  IUseToggleActions,
};
