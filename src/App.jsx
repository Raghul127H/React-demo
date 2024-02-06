// import React  from "react";
// import { Component } from "react";
// import Product from "./component/product"

// class App extends Component{




//  render(){

//   return(
//    <>
//      <h1>App---</h1>
//          <Product phoneno={64783929}/>
// </>
//   );

//  }

// }
// export default App;

import React from "react"
import Birthday from "./component/funComp/Birthday";
import ApiCallComp from "./component/funComp/ApiCallComp";
import ProductComp from "./component/funComp/ProductComp";

   function App() {
      return(
         <>
         <div>
         {/* <h1>ProductFun</h1> */}
         {/* <ProductFun/> */}   

          {/* <Birthday/> */}/
        {/* <ProductComp/> */}
          <ApiCallComp/>
         </div>
         </>
          
      )
   }

export default App