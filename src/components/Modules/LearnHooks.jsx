import React, { useEffect, useRef, useState } from 'react'

const LearnHooks = () => {
    const btnRef = useRef ();
    const [count, setCount]=useState(0);

    useEffect(() =>{
        console.log(count);
    },[count]);
  return (
   
    <div>
          <button  style={{display: "none"}} onClick={()=> setCount((prev)=> prev +1)} ref = {btnRef}>Add Count</button>
          <button onClick={()=> setCount((prev)=> prev -1)}>sub Count</button>
        <h1>{count}</h1>

        <button onClick={()=>{
            btnRef.current.click()
            btnRef.current.style.display = "block"
        }}>Trigger Count</button>
    </div>

  );
};

export default LearnHooks