import React,{useState} from 'react'

function HookCounter(){
    const[count,setCount]=useState(0)

    return(
        
        <div>
            <hr></hr>
            <button onClick={()=>setCount(count+1)} > HookCounter  {count} </button>
        </div>
    )
}
export default HookCounter;