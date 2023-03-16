import React, { useEffect} from 'react';

const Demo = () => {

    // const [data , setData] = useState('')

    useEffect(() => {
        fetch('https://netflix-unofficial.p.rapidapi.com/api/genres')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // setData(json)
            });
    }, [] );

    return (
        <>
            {/* {
                data.map ( items => (
                    <p> <strong> Post 👉 {items.id} </strong>  {items.title} </p>
                ))
            } */}
        </>
    )
}

export default Demo
