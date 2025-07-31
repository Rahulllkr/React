import React, { useEffect, useState } from 'react'

const TypoMeter = () => {
    const [text,setText] = useState("");
    const [timeLeft,setTimeleft] = useState(60);
    const [isRunning,setIsRunning] = useState(false);
    const [wpm,setWpm] = useState(0);

    useEffect(() => {
        if(isRunning && timeLeft > 0){
            const timer = setTimeout(() => {
                setTimeleft(prev => prev -1)
            },1000)
            return () => clearTimeout(timer)
        }
        if(timeLeft === 0){
            endGame();
        }
    },[timeLeft,isRunning]);

    const handleChange = (e) => {
        const value = e.target.value;
        setText(value)

        if(!isRunning){
            setIsRunning(true);
        }
    }

    const endGame = () => {
        setIsRunning(false)
        const words = text.trim().split("").filter(word => word !== "").length;
        setWpm(words)
    }

    const reset = () => {
        setText("")
        setTimeleft(60)
        setWpm(0)
        setIsRunning(false)
    }
  return (
    <div>
        <h1>Typing Speed Test</h1>
        <textarea rows={6} cols={50} value={text} onChange={handleChange} disabled = {timeLeft === 0} placeholder='Start Typing Here'/>
        <div>
            <p>Time Left : {timeLeft}s</p>
            <p>WPM : {wpm}</p>
            <button onClick={reset}>Reset</button>
        </div>
        
    </div>
  )
}

export default TypoMeter