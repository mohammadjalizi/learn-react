import React, { Component } from 'react'

export default class Frome extends Component {



    constructor(props){
super(props)


this.state={
username:''

}


this.CLICKCHng=this.CLICKCHng.bind(this)
    }
    CLICKCHng(event){
console.log(event)

    
    }
  render() {
    return (
      <div >
<div>
    <input type="text"  value={this.state.username} onChange={this.CLICKCHng}  className=" bg-slate-500 "/>
    </div>


      </div>
    )
  }
}
