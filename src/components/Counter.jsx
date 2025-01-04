"use client"
import { useState } from 'react';

const Counter = () => {
    const [couter, setCounter] = useState(0);
    return (
        <>
      <h1>Counter {couter}</h1>
      <button className="btn btn-accent" onClick={() => setCounter(couter + 1)}>Incress</button>
      <button className="btn btn-accent" onClick={() => setCounter(couter - 1)}>Decress</button>
        </>
    );
};

export default Counter;