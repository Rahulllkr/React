import React, { useEffect, useState } from 'react'

const Timetaken = ({handleTimetaken}) => {

    const [time,setTime] = useState(0);

    const handleChange = (time) => {
        handleTimetaken(time)
    }

    useEffect(() => {

       let interval = setInterval(() => {

        setTime((prev) => {
            let newTime = prev + 1;
            handleChange(newTime);
            return newTime;

        })

        },1000)

        return (() => {
            clearInterval(interval)
        })

    },[])


  return (
    
    <div>

        <p>Time : {time}</p>
        
    </div>
  )
}

export default Timetaken