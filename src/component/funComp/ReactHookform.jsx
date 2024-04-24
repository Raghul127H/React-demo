import React from "react";
import {useForm}from "react-hook-form"

 function ReactHookform() {

const {

   register,
   handleSubmit,
   formState:{errors}

} = useForm()


const onsubmit =(data)=>{
  console. log(data);
  
};

console.log(errors);




  return (
    <div>
     <input
     type='text' placeholder='Enter ur Name'{...register("firstname")} />
     <br/>

     <input
     type='text' placeholder='Enter ur email'{...register("email",{ required: "Email is required" })}/>
     <br/>

     <p>{errors?.email?.message}</p>

     <input
     type='text' placeholder='Enter ur age' {...register("age")}/>
     <br/>

     <button onClick={handleSubmit(onsubmit)}>Submit</button>
    </div>
  );
}
export default ReactHookform;