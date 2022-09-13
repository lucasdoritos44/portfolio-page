import React, {useState, useRef} from 'react'
import { useEffect } from 'react'
import './LoadingCounter.css'

const LoadingCounter = ({start = 0, end = 100, timer = 50, side}) => {
    const [counter, setCounter] = useState(null)
    
    const ref = useRef(start)

    const accumulator = end / 100

    const updateCounter = () => {
        if(ref.current < end){
            const result = Math.ceil(ref.current + accumulator);
            if(result > end) return setCounter(end)
            setCounter(result);
            ref.current = result;
        }
        setTimeout(updateCounter, 15)
    }

    useEffect(() => {
        let isMounted = true;
        if(isMounted) {updateCounter()}
           return () => isMounted = false
        
    }, [end, start])

  return (
    <div className={`counter__${side}`}>
        <p>{counter} %</p>
    </div>
  )
}

export default LoadingCounter