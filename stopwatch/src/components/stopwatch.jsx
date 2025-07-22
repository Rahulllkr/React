import React, { useState } from 'react'

const Stopwatch = () => {

    const [time,setTime] = useState(0);
    const [isRunning , setIsRunning] = useState(false);

    let timer;

    const start = () => {

        if(!isRunning){

            setIsRunning(true)
            timer = setInterval(() =>{
                setTime((prevTime) => prevTime + 1)

            },1000)
        }
    }

    const stop = () => {
        setIsRunning(false);
        clearInterval(timer);
    }

    const reset = () => {
        setIsRunning(false);
        clearInterval(timer);
        setTime(0);
    }
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Stopwatch: {time} s</h1>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Stopwatch