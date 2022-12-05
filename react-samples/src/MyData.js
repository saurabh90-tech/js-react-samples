import { useEffect, useState } from "react";

export default function MyData(){
    const [totalReactPackages,setTotalReactPackages] = useState(null);

    useEffect( 
        () => {
            fetch('https://api.npms.io/v2/search?q=react')
            .then( response => response.json())
            .then( data => setTotalReactPackages(data.total));
        },[]);


    return(
        <div>
            <h2> Total React Packages: {totalReactPackages}</h2>
        </div>
    )
}