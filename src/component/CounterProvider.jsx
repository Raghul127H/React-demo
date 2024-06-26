import React, { useState } from 'react'
import CounterContext from '../Context/CounterContext';

function CounterProvider({ children }) {
  const [count, setcount] = useState(1);

  const increment = () => {
    setcount(count + 1);
  };
  return (
    <CounterContext.Provider value={{ count, increment }}>
      {children}
    </CounterContext.Provider>


  );
};
export default CounterProvider;


