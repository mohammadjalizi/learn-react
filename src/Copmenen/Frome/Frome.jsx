import React, { Component } from 'react'

export default class Frome extends Component {

    constructor(props){
super(props)
this.state={
username:''

}

        
    }
  render() {
    return (
      <div cl>
<div>
    <input type="text"  value={this.state.username}  className=" bg-slate-500 "/>
    </div>


      </div>
    )
  }
}
