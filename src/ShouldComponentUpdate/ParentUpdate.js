import React, { Component } from 'react'
import ChildUpdate from './ChildUpdate'
import './update.css'

export class ComponentUpdate extends Component {
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
        else{
            this.setState({
                bg:'white',
                btnBg:'black'
            })
        }
    }
  render() {
    return (
      <div className={`componentUpd ${this.state.bg}`}>
        <h2>6. shouldComponentUpdate</h2>
        <p>galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker inccvc </p>
        <button className={`button ${this.state.btnBg}`} onClick={this.btnHandler}>Change Theme</button>
        <ChildUpdate value='Anshika'/>
      </div>
    )
  }
}

export default ComponentUpdate