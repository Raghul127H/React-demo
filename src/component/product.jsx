import React from 'react';
import  { useContext } from 'react'
import CounterContext from '../Context/CounterContext';

 function Product() {
   const{increment}= useContext(CounterContext);

    return (
      <div>
       <button onClick={increment}>Add to cart</button>
      </div>
    )
  }

export default Product;
