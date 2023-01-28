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

  this.setState({temp:preveState+1})

})

    }
    Minus(){


    }
render(){

return(
    <div className=" bg-green-800  w-[50%] m-auto h-3/5 ">

<div className={`    `}>
    10 c

</div>
<div className=" flex justify-between">
<button onClick={this.addclass}> +</button>
<button onClick={this.Minus}>-</button>
</div>

    </div>

)



}

}