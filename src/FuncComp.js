import React from "react";
// import './App.css';

function FuncComp(){
    return(
        <div className="leftBox">
            <h1>This is creating using Function Component</h1>
            <p>This is done by using external Css</p>
            <p style={{color: 'blue'}}>This is done by using internal Css</p>
        </div>
    )
}

export default FuncComp