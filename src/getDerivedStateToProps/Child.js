import React, { Component } from 'react'

export class Child extends Component {

    constructor(props) {
        super(props)
        this.state = {
           currentBg:'white',
           currentBtnBg:'black'
        }
    }

    static getDerivedStateFromProps(props,state){
        console.warn('',props,state)
    }
    
    render() {
        console.warn('render')
        return (
            <h4>Current Value for div Background is "{this.state.currentBg}" & Current Value for button Background is "{this.state.currentBtnBg}"</h4>
        )
    }
}

export default Child