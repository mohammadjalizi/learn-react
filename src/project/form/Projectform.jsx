import React, { Component } from 'react'

export default class  Projectfrom extends Component {

  constructor(props){
super(props)

this.state={
firstNameData:"",
lastNameData:"",
emailData:"",
submited:false

}
this.submithandel=this.submithandel.bind(this)

  }



  submithandel(event){
event.preventdefault()

  }
  render() {
    return (
      <div>


<div className=' flex flex-col  '>


<form className='  bg-yellow-500 w-[50%] m-auto rounded-3xl border border-cyan-300  '  onSubmit={this.submithandel}  autoComplete="off">
<input type="text"  value={this.state.firstNameData}  placeholder="firstName" onChange={this.firstnameChang}  >


</input>
<input type="text"  value={this.state.lastNameData}  placeholder="lastname" onChange={this.lastnameChang}     >

  
</input>
<input type="text"  value={this.state.emailData}  placeholder="email"   onChange={this.emailChang} >

  
</input>
</form>


</div>

      </div>
    )
  }
}
