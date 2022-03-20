import React, { useEffect, useState } from 'react';

const Watch = () => {
    const [count, setCount]= useState(0);
    const increseCount= ()=>{
        const newCount = count+1;
        setCount(newCount); // asynchonus er style e kaj kore
    }

    useEffect(()=>{
        console.log(count);
    },[count]); //[count] eta dependency list hisebe kaj kore , data koy bar load hobe jar upor nirvor kore tar nam bose , caile ekadhik bosano jay
    return (
        <div>
            <h1>Hello to watch!!</h1>
            <h3>Count: {count}</h3>
            <button onClick={increseCount}>Count</button>
        </div>
    );
};

export default Watch;