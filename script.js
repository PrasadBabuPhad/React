import React from "react"
import ReactDOM from 'react-dom/client'

function Counter(){
    let count=0;

    function incrementnumber(){
        count+=1;
        document.querySelector('h1').innerText=`Count is ${count}`;
    }

    function decrementnumber(){
        count-=1;
        document.querySelector('h1').innerText=`Count is ${count}`;
    }


    return(
        <div className="first">
        <h1>Count is: {count}</h1>
        <button onClick={incrementnumber}>Increment</button>
        <button onClick={decrementnumber}>Decrement</button>
        </div>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<Counter/>)