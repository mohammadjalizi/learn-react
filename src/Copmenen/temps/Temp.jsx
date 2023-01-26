import { Component } from "react";

export default  class Temp  extends Component{


render(){

return(
    <div className=" bg-green-800  w-[50%] m-auto h-3/5 ">

<div>

    <div className=" cold  border rounded-full p-2  w-14  ">

        10 c
    </div>
    <div className=" flex justify-between ">

        <button>+</button>
        <button>-   </button>
    </div>
</div>


    </div>

)



}

}