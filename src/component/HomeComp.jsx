import React, { useEffect,useState } from 'react'
import axios from 'axios'
import useApifetch from '../hook/useApifetch'
import Loder from './loder'


export default function HomeComp() {
  

  let {data,loader}= useApifetch('https://fakestoreapi.com/products')


  return (
    <div>
      {loader?
        <Loder/>:
        <div>
{data.map((da,i)=>(
  <div key={i}>
  <h1>{da.title}</h1>
</div>
))}
</div>}


    </div>
  )
}
