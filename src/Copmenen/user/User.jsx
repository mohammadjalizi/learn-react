import React, { Component } from 'react'

export default class User extends Component {
  render() {
    return (
      <div>
<h1>   name:{this.props.name}  age{this.props.age}  </h1>

      </div>
    )
  }
}

