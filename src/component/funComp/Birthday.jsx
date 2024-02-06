import React, { useEffect, useState } from "react";
import "./birthday.css"


const Birthday = () => {

   const[data,Setdata]= useState(
    [

        {
      
          id: 1,
      
          name: 'Bertie Yates',
      
          age: 29,
      
          image:
      
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
      
        },
      
        {
      
          id: 2,
      
          name: 'Hester Hogan',
      
          age: 32,
      
          image:
      
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
      
        },
      
        {
      
          id: 3,
      
          name: 'Larry Little',
      
          age: 36,
      
          image:
      
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
      
        },
      
        {
      
          id: 4,
      
          name: 'Sean Walsh',
      
          age: 34,
      
          image:
      
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
      
        },
      
        {
      
          id: 5,
      
          name: 'Lola Gardner',
      
          age: 29,
      
          image:
      
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
      
        },
      
      ]
  );

const handleremove=()=>{
   Setdata([])
}



  return (
    <div className="tam"> 
       <main className="black">
       <h1 className="ram">{data.length}birthday Today</h1>
       {data.map((da)=>(
         <section>

          
               <img className="normal"  height="100px" width="100px" src={da.image}/>
                <div className="rag"> 
               <h1 className="ram">{da.name}</h1>
               <p className="ram">{da.age} years ago</p>

            </div>
            </section>
       ))}
       <button onClick={handleremove} className="but">clear all</button>
       
      </main>

    </div>


  )

};
  
export default Birthday;
