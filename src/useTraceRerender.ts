import { useEffect, useRef } from 'react'

// @ts-ignore
export function useTraceRerender(props) {
  const prev = useRef(props)

  useEffect(() => {
    const changedProps = Object.entries(props).reduce((ps, [k, v]) => {
      if (prev.current[k] !== v) {
        // @ts-ignore
        ps[k] = [prev.current[k], v]
      }
      return ps
    }, {})

    if (Object.keys(changedProps).length > 0) {
      console.log('Changed props:', changedProps)
    }

    prev.current = props
  })
}
