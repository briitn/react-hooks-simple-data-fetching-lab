// create your App component here
import React, {useState, useEffect} from "react";
function App(){

    const [image, setImage]=useState('')

    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then (res=>res.json())
        .then(res=>setImage(res.message))

    },[])

    if (!image) return <h3>Loading...</h3>;

return <div>
    <img src={image}
    alt="A Random Dog"/>
 
    </div>    
}

export default App