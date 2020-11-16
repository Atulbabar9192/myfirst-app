import React, { Component } from 'react';  
    
class Counter extends Component {
    
    state={
 count:2,
 name:"Rahul",
 tags=["THis is java", "This is .net", "This  is c++", "This is react"]

}
    render() { 
        {
let classes = "badge m-2 badge-";

classes+= this.state.count==0 ? "warning" :"primary" ;

    return (<React.Fragment> <title>Hello progerammers...</title> 
    <span>{this.state.count}</span>
    <p>we can add the two nos</p>
    <ul> {this.state.tags.map( name=><li key={tag}>{tag}</li>)} </ul>
    <span className= {classes}>{this.state.name}</span>
    <button className="btn btn-warning btn-sm" > Increment </button></React.Fragment>);
    
    }
 }
}
export default Counter ;