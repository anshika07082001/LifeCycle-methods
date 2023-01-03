import React, { Component } from 'react'
import './didMount.css';

export class DidMount extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
          bg:'white',
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            console.log('ComponentDidMount')
            this.setState({
                bg:'black',
            })
        },5000)
    }

  render() {
    return (
      <div className={`didMount ${this.state.bg}`}>
        <h3>4. componentDidMount Rendering After 5 seconds</h3>
        <p>ley of type and scrambled it to make a type specimen book. It has survived ley of type and scrambled it to make a type specimen book. It has survived </p>
        <p> galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker inc</p>
      </div>
    )
  }
}

export default DidMount