import React, {useState} from 'react';

export default function useFlag(initialValue: boolean):
  [boolean, {set: (value: boolean) => void, toggle: () => void, toggleTnB: (time: number) => void}] {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = () => setValue(!value);

  const toggleTnB = (time: number) => {
    setValue(!value);
    setTimeout(() => setValue(value), time);
  };

  return [
    value,
    {
      set: setValue,
      toggle,
      toggleTnB,
    },
  ];
}
