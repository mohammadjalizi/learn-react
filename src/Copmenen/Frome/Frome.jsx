import React, { Component } from 'react'

export default class Frome extends Component {



    constructor(props){
super(props)


this.state={
username:'',
texterae:'',
isloading:false

}


this.CLICKCHng=this.CLICKCHng.bind(this)
this.chanchtext=this.chanchtext.bind(this)
this.isloadingchang=this.isloadingchang
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
        this.setState({
textarea:event.nativeEvent.target.value

        })
        }

isloadingchang(event){
// console.log(event)
this.setState({
isloading: event.nativeEvent.target.checked

})

}


  render() {
    return (
      <div >
<div>
    <h1>  {this.state.username}  </h1>
    <input type="text"  value={this.state.username} onChange={this.CLICKCHng}  className=" bg-slate-500 "/>
    </div>

<textarea value={this.state.texterae}   onChange={this.chanchtext}> </textarea>
<div>

<label htmlFor='login'>login</label>
<input type="checkbox"  value={this.state.isloading} onChange={this.isloadingchang}></input>

</div>
      </div>
    )
  }
}
