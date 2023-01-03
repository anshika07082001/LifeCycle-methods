import React, { Component } from 'react'
import './snap.css'

export class ParentSnap extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          bg:'white',
          btnBg:'black'
        }
    }

// Click Handler
    
    btnHandler=()=> {
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

    componentDidMount(){
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

    getSnapshotBeforeUpdate(prevProps,prevState){
      console.warn('State before update',prevState)
      return null
    }

    componentDidUpdate(){
      console.log('updated value of state',this.state.bg,this.state.btnBg)
    }

  render() {
    return (
      <div className={`ParentSnap ${this.state.bg}`}>
        <h3>7 and 8 . getSnapshotBeforeUpdate</h3>
        <p>of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker inccv</p>
        <button className={`button ${this.state.btnBg}`} onClick={this.btnHandler}>Change Theme</button>
      </div>
    )
  }
}

export default ParentSnap