import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {

  constructor() {
    super()
    this.state = {
      color: getRandomColor(),
      childColor: "#FFF"
    }
  }

  render() {
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <Child color={this.props.childColor} handleColorChange={this.changeColor}/>
        <Child color={this.props.childColor} handleColorChange={this.changeColor}/>
      </div>
    )
  }
}

export default Parent
