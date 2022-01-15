import React from 'react';
declare type UseInput = [
    string,
    (input?: string | React.ChangeEvent<HTMLInputElement>) => void
];
declare const useInput: (initialValue: string) => UseInput;
export default useInput;
