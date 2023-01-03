import React, { Component } from 'react'

export class ChildUpdate extends Component {

    shouldComponentUpdate(nextProps){
        console.log(nextProps)
        if(nextProps.value==this.props.value){
            console.log('true')
            return true
        }
        else{
            console.log('false')
            return false;
        }
    }

    render() {
      console.log('Child rendering')
      return (
        <div>ChildUpdate</div>
      )
    }
}

export default ChildUpdate