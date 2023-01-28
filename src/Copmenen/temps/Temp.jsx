import { Component } from "react";

export default  class Temp  extends Component{

  constructor (props){
super(props)

this.state={

    Temp:10,
    tempclass:'cold'


}
this.Addplus=this.Addplus.bind(this)
this.Minus=this.Minus.bind(this)

  }


Addplus(){
if(this.state.Temp>30){
return false

}
this.setState(prevestate=>{
return {Temp:prevestate.Temp + 1}

})

}
Minus(){
    if(this.state.Temp<0){
        return false
        
        }
        this.setState(prevestate=>{
        return {Temp:prevestate.Temp- 1}
        
        })

}

render(){

return(
    <div className=" bg-green-800  w-[50%] m-auto h-3/5 ">

<div>

    <div className={`  p-5  ${this.state.tempclass}`}>

{this.state.Temp}
    </div>
    <div className=" flex justify-between ">

        <button  onClick={this.Addplus}>+</button>
        <button onClick={this.Minus}>-   </button>
    </div>
</div>


    </div>

)



}

}