import React, { Component } from 'react'
import Child from './Child';
import './getDerived.css';

export class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         bg:'white',
         btnBg:'black'
      }
    }

    btnHandler=()=>{
        if(this.state.bg=='white'){
            this.setState({
                bg:'black',
                btnBg:'white'
            })
        }
        else {
            this.setState({
                bg:'white',
                btnBg:'black'
            }) 
        }
    }
  render() {
    return (
      <div className={`getDerived ${this.state.bg}`}>
        <h1>2. getDerivedStateFromProps</h1>
        <p> took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker inc</p>
        <Child bg={this.state.bg} btnBg={this.state.btnBg}/>
        <button className={`button ${this.state.btnBg}`} onClick={this.btnHandler}>Change Theme</button>
      </div>
    )
  }
}

export default Parent