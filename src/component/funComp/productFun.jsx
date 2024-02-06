import React, { useState } from "react";

function ProductFun(){

    const [count,setcount] = useState(0);
    const [name,setname]= useState("")
const handleadd = ()=> {
   setcount(count+1)

};
 
const handlename =()=>{
    setname("Raghul")
}

    return(  
    <>
       <h1>Raghul</h1>
       <h2>Count - {count}</h2>
       <h3> name---{name}</h3>
       <button onClick={handleadd}>nameadd</button>
       <button onClick={handleadd}>Add</button>
    </>

    );
}

export default ProductFun;