import React, { useEffect, useState ,axios} from 'react'

//https://randomuser.me/api

const ReactFetchDat = () => {
    const [userData,setUserData] = useState([])
    //after page resfresh perform action

    const fetchData  = async () => {
        const response = await fetch('https://randomuser.me/api')
        const data = await response.json()
       // setUserData(data)
        console.log(data.results)
        setUserData(data.results)
     }
    useEffect(() => {
       fetchData()
    },[])
    return(
        <>
            <div>
                
                <div className='container'>
                    <div>
                     <h1>Random Person data api</h1>
                     {
                        userData.map((curElem) => {
                            return(
                                <>
                                    <img src={curElem.picture.medium} alt="user" />
                                    <p>First : {curElem.name.first} </p>
                                   <p> LastName : {curElem.name.last}</p>
                                   <p>Loaction : {curElem.location.city}</p>
                                   <p>Country : {curElem.location.country}</p>
                                </>
                            )
                        })
                     }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReactFetchDat;

// const res = await fetch('https://randomuser.me/api');
//     const jsonRes =await res.json();
//     console.log(jsonRes)