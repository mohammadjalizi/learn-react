import React, { Component } from 'react'
import { BsBookFill } from 'react-icons/bs';
export class Booklist extends Component {
    constructor(props){
super(props)
this.state={
books:[],
title:'',
athure:'',
year:'',


}

    }

    titlehandler(event){
        
    }
    athourhandler(event){

        
    }
  render() {
    return (
      <div>

<h1 className='  flex justify-center  border-b-2 border-blue-400 my-16  w-full '>  <BsBookFill   className=' mt-1 mr-6   text-yellow-300    '/>Booklist    </h1>
<div className=' w-[70%] m-auto bg-orange-500 p-16 '>   
<div className=' my-14 '>
<h1>tittle</h1>
<input type=""   value={this.state.title}        onChange={this.titlehandler}      className=' rounded-3xl  border  w-full '/>

</div>
<div>
<h1>tittle</h1>
<input type="" value={this.state.athure}        onChange={this.athourhandler}     className='  rounded-3xl w-full '/>

</div>  
<button   value={this.state.year}       onChange={this.yearhandler}     className='  my-7 rounded-full p-4 bg-orange-400 w-full '>Add Book</button>
</div>
<table className=' w-full  my-8'>

    <thead>

        <tr>
            <th>title</th>
            <th>atyhou</th>
            <th>year</th>
        </tr>
    </thead>
</table>
      </div>
    )
  }
}

export default Booklist