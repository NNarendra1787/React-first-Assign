import { Component } from "react";
// import './App.css';

class ClassComp extends Component{
    render(){
        return(
            <div className="rightBox">
                <h1>This is creating using Class Component</h1>
                <p>This is done by using external Css</p>
                <p style={{color: 'blue'}}>This is done by using internal Css</p>
            </div>
        )
    }
}

export default ClassComp