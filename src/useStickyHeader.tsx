import React, { useEffect, useState } from 'react';
import usePrevious from './usePrevious';
// import _ from 'lodash';

type TDirection = 'up' | 'down';

const useStickyHeader = (
  permanentVisibilityHeight: number = 200,
  changeDirectionDistance: number = 100,
) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<TDirection>('down');
  const [scrollBreakpointPosition, setScrollBreakpointPosition] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const prevScrollPosition = usePrevious(scrollPosition);

  // const onScroll = _.throttle(() => {
  //   setScrollPosition(window.scrollY);
  // }, 250);

  useEffect(() => {
    // document.addEventListener('scroll', onScroll);

    // return () => document.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // if (scrollPosition < permanentVisibilityHeight) {
    //   setIsVisible(true);
    //   return;
    // }
    //
    // const direction: TDirection = scrollPosition > prevScrollPosition ? 'down' : 'up';
    //
    // if (direction !== scrollDirection) {
    //   setScrollDirection(direction);
    //   setScrollBreakpointPosition(scrollPosition);
    // } else {
    //   const distance = scrollDirection === 'up'
    //     ? scrollBreakpointPosition - scrollPosition
    //     : scrollPosition - scrollBreakpointPosition;
    //
    //   if (distance > changeDirectionDistance) {
    //     setIsVisible(scrollDirection === 'up');
    //   }
    // }
  }, [scrollPosition]);

  return isVisible;
};

export default useStickyHeader;
