import { useState } from 'react'

type UseList<T> = [
  T[],
  {
    add: (value: T) => void;
    remove: (value: T) => void;
    removeByIndex: (index: number) => void;
    clear: () => void;
  },
]

const useList = <T>(initialValue: T[]): UseList<T> => {
  const [values, setValues] = useState<T[]>(initialValue)

  const add = (value: T) => setValues((prevValues) => [...prevValues, value]);

  const remove = (value: T) => setValues((prevValues) => prevValues.filter((item) => item !== value));

  const removeByIndex = (index: number) => setValues((prevValues) => prevValues.filter((item, i) => i !== index));

  const clear = () => setValues([]);

  return [
    values,
    {
      add,
      remove,
      removeByIndex,
      clear,
    },
  ]
}

export default useList
