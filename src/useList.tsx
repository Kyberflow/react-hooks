import React, {useState} from 'react';

export default function useList<T>(initialValue: T[] = [])
  : [
    T[],
    {
      set: (values: T[]) => void,
      clear: () => void,
      add: (value: T) => void,
      removeByValue: (value: T) => void,
      removeByIndex: (index: number) => void,
    },
  ] {
  const [values, setValues] = useState<T[]>(initialValue);

  const clear = () => setValues([]);

  const add = (value: T) => setValues([...values, value]);

  const removeByValue = (value: T) => setValues(values.filter((item) => item !== value));

  const removeByIndex = (index: number) => setValues(values.filter((item, ind) => ind !== index));

  return [
    values,
    {
      set: setValues,
      clear,
      add,
      removeByValue,
      removeByIndex,
    },
  ];
}
