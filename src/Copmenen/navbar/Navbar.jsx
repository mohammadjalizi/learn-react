import React, { Component } from 'react'

export default class Navbar extends Component {
constructor(prosp){
    super(prosp)
    this.state={
nootif:[
'number1',
'number2',

'number4',
'number5',]
   }

}


  render() {   
    return (
      <div className=' bg-yellow-200 '>
{this.state.nootif>0&&(

<div className=' flex  '> 
<li> navbar</li>
<span className=' mb-4 ml-6 rounded-full  border-[2px] p-4 bg-indigo-500  '>{this.state.nootif.length}</span>
</div>


)}


      </div>
    )
  }
}
