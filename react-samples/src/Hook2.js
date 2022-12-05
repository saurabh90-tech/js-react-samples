import { useEffect, useState } from "react";

function Hook2(){
    const [count,setCount] = useState(0);

    useEffect( () => {
        document.title = `You have clicked ${count} times`;
        console.log("count is : " + count);
    })
    return(
        <div>
            <p> You clicked {count} times</p>
            <button onClick={ () => setCount(count + 1)}>Click Me</button>
        </div>
    )
}
export default Hook2;