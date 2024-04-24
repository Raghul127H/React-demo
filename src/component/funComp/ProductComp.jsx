import React, {  useEffect,useState } from 'react'


function ProductComp(){
  
    const[name,setname] =  useState("")
    const[count,setcount] = useState(0)

     useEffect(()=>{

         setname("RaghulV");
        
        localStorage.setItem("status","logedin")

        return()=>{
            localStorage.removeItem("status")
            console.log("closed");
        
        }
         
    },[]);

    const handleadd =()=>{
     setcount(count+1);
    
    };


    return(

        <div>
        
        <h1>{name}</h1>
        {count}
        <button onClick={handleadd}>add</button>
       
        </div>     
    
    )


}


export default ProductComp;