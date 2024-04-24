import React from 'react';

  function FormReact() {


 const handlename=()=>{
console.log("hghg");

 }

  return (
    <div>
        <h1>Register form</h1>
        <form>
        

     <label>Name</label>
      <input placeholder="enter ur name" onChange={handlename}/>
      <br/>
      <br/>

      <label>Age</label>
      <input placeholder="enter ur age"/>
      <br/>
      <br/>

      <label>email</label>
      <input placeholder="enter ur email"/>
      <br/>
      <br/>

      <button>submit</button>

      </form>
    </div>
  )
}
export default FormReact;