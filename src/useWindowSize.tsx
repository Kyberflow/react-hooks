import React, {useLayoutEffect, useState} from 'react';

interface Size {
  width: number;
  height: number;
}

export default function useWindowSize(): Size {
  const [size, setSize] = useState<Size>({width: 0, height: 0});

  const updateSize = () => {
    setSize({width: window.innerWidth, height: window.innerHeight});
  };

  useLayoutEffect(() => {
    updateSize();

    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
}
