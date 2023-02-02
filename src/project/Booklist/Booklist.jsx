import React, { Component } from 'react'
import { BsBookFill } from 'react-icons/bs';
export class Booklist extends Component {
  render() {
    return (
      <div>

<h1 className='  flex justify-center  border-b-2 border-blue-400 my-16  w-full '>  <BsBookFill   className=' mt-1 mr-6   text-yellow-300    '/>Booklist    </h1>
<div className=' w-[70%] m-auto bg-orange-500 p-16 '>   
<div className=' my-14 '>
<h1>tittle</h1>
<input type=""  className=' rounded-3xl  border  w-full '/>

</div>
<div>
<h1>tittle</h1>
<input type=""  className='  rounded-3xl w-full '/>

</div>  
<button>Add Book</button>
</div>
      </div>
    )
  }
}

export default Booklist