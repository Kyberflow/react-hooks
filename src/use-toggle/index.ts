import { useState } from 'react';

import { TUseToggleOutput } from './types';

const useToggle = <T>(initialValue: boolean, initialData?: T): TUseToggleOutput<T> => {
  const [{ value, extraData }, setState] = useState<{ value: boolean, extraData?: T }>({
    value: initialValue,
    extraData: initialData,
  });

  const set = (value: boolean, extraData?: T) => {
    setState((prevState) => ({ ...prevState, value, extraData }));
  };

  const enable = () => setState((prevState) => ({ ...prevState, value: true }));

  const disable = () => setState((prevState) => ({ ...prevState, value: false }));

  const toggle = () => setState((prevState) => ({ ...prevState, value: !prevState.value }));

  const toggleThereAndBack = (ms: number) => {
    setState((prevState) => ({ ...prevState, value: !prevState.value }));
    setTimeout(() => setState((prevState) => ({ ...prevState, value: !prevState.value })), ms);
  };

  return [
    value,
    {
      set,
      enable,
      disable,
      toggle,
      toggleThereAndBack,
    },
    extraData,
  ];
};

export default useToggle;

export * from './types';
