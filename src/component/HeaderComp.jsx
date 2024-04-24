import React,{ useContext }from 'react'
import CounterContext from '../Context/CounterContext';

 function HeaderComp() {


    const{count} = useContext(CounterContext)
  return (
    <div>

  <h1> Cart : {count} </h1>
    </div>
  )
}
export default HeaderComp;

