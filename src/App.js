import React , {useState } from 'react'

const App = () => {

    let curTime = new Date().toLocaleTimeString()

    const [nTime, setTime] = useState(curTime)

    const UpdateTime = () => {
        curTime = new Date().toLocaleTimeString()
        setTime(curTime)
    } 

    return (
        <>
            <div>
                <h1>{nTime}</h1>
                <button onClick = {UpdateTime}>get time</button>
            </div>
        </>
    )
}

export default App;