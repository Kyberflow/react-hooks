import React, {useState} from 'react';

export default function useInput(initialValue: string = '')
  : [string, {set: (value: string) => void, setWrap: (InputEvent) => void}] {
  const [input, setInput] = useState(initialValue);

  const setWrap = ({target: {value}}) => setInput(value);

  return [input, {set: setInput, setWrap}];
}
