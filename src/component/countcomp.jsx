import React,{Component} from "react";


class CountComp extends Component{
    state ={
        count:1,
    };

     handleadd=()=>{
     this.setState({count:this.state.count+1})
    };

    render(){
        return(
            <>
            <h1>{this.props.name}</h1>
            <h1>count{this.state.count}</h1>
            <button onClick={this.handleadd}>Add</button>
            </>
        );  }
}

export default CountComp 