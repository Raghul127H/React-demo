import React,{Component} from "react";
import CountComp from "./countcomp";



class Product extends Component{

    state={
        moviename:"Leo"
    }
   render(){
    return(
       
        <>
        
        <h1>Product---- {this.props.phoneno}</h1>
        <CountComp name={this.state.moviename}/>
        </>

    )
    
   }
  
}

export default Product