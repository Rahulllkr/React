import React, { useState } from 'react'
import Counter from './components/counter'
import TypoMeter from './components/TypoMeter'
import './App.css'
import Weather from './components/WeatherApp'
// import Timetaken from './components/Timetaken'
import Timetaken from './components/Timetaken'

function App() {
  // const [count,setCount] = useState(0);
  // const [data,setData] = useState(0);
  const [start,setStart] = useState(false)
  const [timetaken,setTimetaken] = useState(0)

  const handleTimetaken = (arg) => {
    setTimetaken(arg)
  }

  

  return (
    <>
      {/* <Counter  setCount = {setCount} count={count} setData = {setData} data={data}/> */}
      {/* <TypoMeter /> */}
      {/* <Weather /> */}
      
      <button onClick={() => setStart(true)}>Start Game</button>
      <button onClick={() => setStart(false)}>Stop Game</button>
      {start && <Timetaken handleTimetaken = {handleTimetaken}/>}
      {!start && <p>Time Taken : {timetaken}</p>}
    </>
  )
}

export default App
