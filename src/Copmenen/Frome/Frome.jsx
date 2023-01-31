import React, { Component } from 'react'

export default class Frome extends Component {



    constructor(props){
super(props)


this.state={
username:'',
texterae:''

}


this.CLICKCHng=this.CLICKCHng.bind(this)
this.chanchtext=this.chanchtext.bind(this)
    }
    CLICKCHng(event){
console.log(event)
this.setState({
username:event.nativeEvent.target.value


}


)

    
    }
    chanchtext(event){

        console.log(event)
        
        }
  render() {
    return (
      <div >
<div>
    <h1>  {this.state.username}  </h1>
    <input type="text"  value={this.state.username} onChange={this.CLICKCHng}  className=" bg-slate-500 "/>
    </div>

<textarea value={this.state.texterae}   onChange={this.chanchtext}> </textarea>
      </div>
    )
  }
}
