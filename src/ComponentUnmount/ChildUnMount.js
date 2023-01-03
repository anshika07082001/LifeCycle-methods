import React, { Component } from 'react'

export class ChildUnMount extends Component {

    componentWillUnmount() {
        alert('The component is going to be unmounted');
    }
  render() {
    return (
      <h4>{this.props.text}</h4>
    )
  }
}

export default ChildUnMount