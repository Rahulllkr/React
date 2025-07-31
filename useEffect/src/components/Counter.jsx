import React, { useEffect } from 'react'

const Counter = ({setCount,count,setData,data}) => {

    function updateCount(){
        setCount(count+1)
    }
    useEffect(() => {
        console.log("Count Update")
    },[count])
    function updateData(){
        setData(data+1)
    }
    useEffect(() => {
        console.log("Data Updated")
    },[data])
  return (
    <div>
        <h1>Hello UseEffect</h1>
        <button onClick={updateCount}>Count</button>
        <button onClick={updateData}>Data</button>

        <h3>Count Track : {count}</h3>
        <h3>Data Track : {data}</h3>
    </div>
  )
}

export default Counter