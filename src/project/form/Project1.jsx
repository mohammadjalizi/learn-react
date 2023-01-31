import React, { Component } from 'react'

export default class Project1 extends Component {

     constructor(props){
        super(props)
        this.state={
            submited:false,
            firstNameData:'',
            lastNameData:'',
            emailData:''



        }
this.submithandel=this.submithandel.bind(this)
this.firstnameChang=this.firstnameChang.bind(this)
this.lastnameChang=this.lastnameChang.bind(this)
this.emailChang=this.emailChang.bind(this)

     }
     submithandel(event){
event. preventDefault() 
this.setState({
submited:true

})
     }
     firstnameChang(){

     }
     lastnameChang(){

     }
     emailChang(){


     }
  render() {
    return (
      <div>

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
<button className=' text-center rounded-3xl  shadow-2xl  flex justify-center'> rigistar </button>
</div>
</form>


</div>

      </div>
      </div>
    )
  }
}
