import React, { useState }  from "react";


function ApiCallComp() {
const[func,setfunc]=useState([])
  

const handleapi = async ()=>{
  const response =  await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  console.log(data);
};
  
    return(
      <div>
        {func.map((da,i)=>(
          <div key={i}>
            {da.image}

          </div>

        ))}


          <h1></h1>

    <button onClick={handleapi}>Api call</button>


      </div>
    );

    }


export default ApiCallComp;