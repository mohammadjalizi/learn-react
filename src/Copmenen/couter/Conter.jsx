import { Component } from "react";



export default  class Conter  extends Component{
constructor(props){
super(props)

this.state={

  conter:0
}
this.addclick=this.addclick.bind(this)
this.minusclick=this.minusclick.bind(this)

}

addclick(){
  
  alert("okkk")
}
  minusclick(){

    console.log("minus sof")
  }

render(){

return(


  <div className=' bg-orange-400 w-[30%] m-auto mt-64 '>
  <h1 className=' text-center '>conter</h1>
  <p>{Conter}</p>
 <div className=' flex justify-between '>
 
 <button onClick={this.addclick}>addcount</button>
 <button onClick={this.minusclick}> lawer cont </button>
     
 </div>
 
     </div>

)

}

}
