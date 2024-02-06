import React, {  useEffect,useState } from 'react'


function ProductComp(){
  
    const [name,setname] = useState("")

     useEffect(()=>{
         setname("RaghulV")
         
    })


    return(

        <div>


    <h1>name is{name}</h1>     
        </div>
    )


}


export default ProductComp