import React from 'react'
import './App.css';
import Mess from './Mess';
import FuncComp from './FuncComp';
import ClassComp from './ClassComp';

class Class extends React.Component{
  constructor(){
    super();
    this.state={
      functionClick: false,
      ClassClick: false
    }
  }
  render(){
    return(
      <div className='App'>
        <Mess />
        <div className='myButtons'>
          <button id='btn1' onClick={()=> this.setState({functionClick: !this.state.functionClick})}>To see Styleing in Functional Component</button>
          <button id='btn2' onClick={()=> this.setState({ClassClick: !this.state.ClassClick})}>To see Styleing in Class Component</button>

              {this.state.functionClick && <FuncComp />}
              {this.state.ClassClick && <ClassComp />}
        </div>
      </div>
    );
  }
}

export default Class


