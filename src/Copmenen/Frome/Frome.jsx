import React, { Component } from 'react'

export default class Frome extends Component {

    constructor(prosp){
super(props)
this.state={
username:''

}

        
    }
  render() {
    return (
      <div>
<div>
    <input type="text"  value={this.state.username} />
    </div>


      </div>
    )
  }
}
