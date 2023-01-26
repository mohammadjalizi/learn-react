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
  this.setState( item =>{

return {conter: item.conter+1}

  })


}
  minusclick(){

  this.setState(prevxount=>{
return{conter:prevxount.conter-1}

  })
  }

render(){

return(


  <div className=' bg-orange-400 w-[30%] m-auto mt-64 '>
  <h1 className=' text-center '>conter</h1>
  <p>  {  this.state.conter} </p>
 <div className=' flex justify-between '>
 
 <button onClick={this.addclick}>addcount</button>
 <button onClick={this.minusclick}> lawer cont </button>
     
 </div>
 
     </div>

)

}

}
