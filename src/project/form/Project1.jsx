import React, { Component } from 'react'

export default class Project1 extends Component {

     constructor(props){
        super(props)
        this.state={
            submited:false,
            firstNameData:'',
            lastNameData:'',
            emailData:'',
            Allvalid:false
            



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
if(this.state.firstNameData.length!==0&&this.state.lastNameData.length!==0 &&this.state.emailData.length!==0){

  this.setState({
Allvalid:true

  })
  setTimeout(() => {
    this.setState({
      Allvalid:false
    })
  }, 3000);


}
     }
     firstnameChang(event){
      this.setState({
firstNameData:event.target.value

      })

     }
     lastnameChang(event){
      this.setState({
        lastNameData:event.target.value
        
              })
     }
     emailChang(event){
      this.setState({
        emailData:event.target.value
        
              })

     }
  render() {
    return (
      <div>

<div>


<div className=' flex flex-col  '>


<form className='  bg-yellow-500 w-[50%] m-auto rounded-3xl border border-cyan-300  '  onSubmit={this.submithandel}  autoComplete="off">
    <div className=' m-auto '> 
    <h4>{this.state.submited&&this.state.Allvalid&&(
<h1 className=' text-blue-300'>suscrid</h1>

    )}</h4> 
    <div>   
<input type="text"  value={this.state.firstNameData}  placeholder="firstName" onChange={this.firstnameChang}  className=" flex flex-col   m-auto py-2 mb-4 rounded-3xl text-center " >


</input>
{this.state.submited &&this.state.firstNameData.length===0 &&(
  <span className=' text-center block  text-red-400  w-full '>   pleas enter firstname  </span>

)}

</div>
<div>    
<input type="text"  value={this.state.lastNameData}  placeholder="lastname" onChange={this.lastnameChang}  className=" flex flex-col  m-auto py-2 mb-4 rounded-3xl text-center"    >

  
</input>
{ this.state.submited &&  this.state.lastNameData.length===0 &&(
  <span className=' text-center block  text-red-400  w-full '>  please enter lastName  </span>

) }

</div>
<div>  
<input type="text"  value={this.state.emailData}  placeholder="email"   onChange={this.emailChang}  className=" flex flex-col  m-auto py-2 mb-4 rounded-3xl text-center"   >

  
</input>
{this.state.submited && this.state.emailData.length===0&&(

<span className=' text-center block  text-red-400  w-full '>  plear add emaild  </span>


)}
</div>

<button className=' text-center rounded-3xl  shadow-2xl  flex justify-center'> rigistar </button>
</div>
</form>


</div>

      </div>
      </div>
    )
  }
}
