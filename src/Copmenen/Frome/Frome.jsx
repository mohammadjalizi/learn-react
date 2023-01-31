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
this.isloadingchang=this.isloadingchang.bind(this)
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
   <div>


<div className=' flex flex-col  '>


<form className='  bg-yellow-500 w-[50%] m-auto rounded-3xl border border-cyan-300  '  onSubmit={this.submithandel}  autoComplete="off">
    <div className=' m-auto '>  
<input type="text"  value={this.state.firstNameData}  placeholder="firstName" onChange={this.firstnameChang}  className=" flex flex-col   m-auto py-2 mb-4 rounded-3xl text-center " >


</input>
<input type="text"  value={this.state.lastNameData}  placeholder="lastname" onChange={this.lastnameChang}  className=" flex flex-col  m-auto py-2 mb-4 rounded-3xl text-center"    >

  
</input>
<input type="text"  value={this.state.emailData}  placeholder="email"   onChange={this.emailChang}  className=" flex flex-col  m-auto py-2 mb-4 rounded-3xl text-center"   >

  
</input>
</div>
</form>


</div>

      </div>
    )
  }
}
