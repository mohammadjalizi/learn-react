import { Component } from "react";

export default  class Temp  extends Component{

    constructor(prosp){
super(prosp)
this.state={
temp:10,
tempclass:'cold'


}
this.addclass=this.addclass.bind(this)
this.Minus=this.Minus.bind(this)

    }



    addclass(){
if(this.state.temp>30){
return false

}
this.setState(preveState=>{

 return {temp:preveState.temp+1}

})
if(this.state.temp>=15){
this.setState({tempclass:'hot'})

}
    }
    Minus(){
if(this.state.temp < 0){
return false

}
this.setState(preveState=>{
return {temp:preveState.temp-1}

})
if(this.state.temp<=15){
    this.setState({tempclass:'cold'})
    
    }

    }
render(){

return(
    <div className=" bg-green-800  w-[50%] m-auto h-3/5 ">

<div className={`  ${this.state.tempclass}   `}>
  {this.state.temp}

</div>
<div className=" flex justify-between">
<button onClick={this.addclass}> +</button>
<button onClick={this.Minus}>-</button>
</div>

    </div>

)



}

}