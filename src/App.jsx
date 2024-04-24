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

import React, { useEffect, useRef, useState } from "react"
import ProductFun from "./component/funComp/productFun";
import Birthday from "./component/funComp/Birthday";
import ApiCallComp from "./component/funComp/ApiCallComp";
import ProductComp from "./component/funComp/ProductComp";
import NavbarComp from "./component/common/NavbarComp";
import FormReact from "./component/funComp/FormReact";
import Grocery from "./component/funComp/Grocery";
import ReactHookform from "./component/funComp/ReactHookform";
import Todolist from "./component/funComp/Todolist";
import HeaderComp from "./component/HeaderComp";
import CounterProvider from "./component/CounterProvider";
import Product from "./component/Product";
import UserefComp from "./component/UserefComp";
import HomeComp from "./component/HomeComp";
import ProductComps from "./component/ProductComps";
import ContactusComp from "./component/ContactusComp";
import {  BrowserRouter,Routes,Route, Link } from "react-router-dom";
import CounterRedux from "./Component/CounterRedux";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Figma from "./Component/funComp/Figma";






function App() {

   //    const[isclose,setisclose]= useState(true)

   //   const  handleclose = ()=>{
   //       setisclose(false)
   //    }
  
   
   
   return (
      
     <div>
      {/* <Provider store={store}>
       <CounterRedux/>
       </Provider> */}
       
            {/* <NavbarComp/> */}
            {/* <h1>ProductFun</h1> */}
            {/* <ProductFun/> */}

            {/* <Birthday/> */}

            {/* <ReactHookform/> */}

            {/* <FormReact/> */}

            {/* <Todolist/> */}
            {/* <CounterProvider>
               <HeaderComp />
               <Product />
            </CounterProvider> */}

        

            {/* <ApiCallComp/> */}

            {/* <Grocery/> */}
            {/* <UserefComp/> */}

        {/* <div>   
            <BrowserRouter>
          <nav>
            <ol>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/Product">Product</Link></li>
               <li><Link to="/Contactus">Contactus</Link></li>
            </ol>
          </nav>
          <Routes>
            <Route path="/" element={<HomeComp/>}/>
            <Route path="/Product" element={<ProductComps/>}/>
            <Route path="Contactus" element={<ContactusComp/>}/>
{/*           
            <HomeComp/>
            <ProductComps/>
            <ContactusComp/> */}
            {/* </Routes> 

      </BrowserRouter></div> */} 
      <Figma/>
   </div>
   )
}
export default App;
