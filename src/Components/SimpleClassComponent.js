import React from "react";
class SimpleClassComponent extends React.Component{
    constructor(props){
        super(props)
    }
  render(){
    return(
       
        <>
         {console.log(this.props)}
        <h1>Class Component {this.props.fname}</h1>
        </>
    )
  }
}
export default SimpleClassComponent