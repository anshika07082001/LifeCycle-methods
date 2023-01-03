import React, { Component } from 'react'
import ChildUnMount from './ChildUnMount'
import './unmount.css'

export class UnMount extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        text:'componentWillUnmount() Child Component',
        delete:false
      }
    }

    clickHandler =()=>{
        this.setState({
            delete:true
        })
    }

  render() {
    return (
      <div className='UnMount'>
        <h2>9. componentWillUnmount()</h2>
        <button className='button' onClick={this.clickHandler}>Hide Child Component</button>
        {this.state.delete ? null : <ChildUnMount text={this.state.text} />}
      </div>
    )
  }
}

export default UnMount