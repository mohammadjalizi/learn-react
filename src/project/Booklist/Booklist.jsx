import React, { Component } from 'react'
import { BsBookFill } from 'react-icons/bs';
import Book from './Book';
export class Booklist extends Component {
    constructor(props){
super(props)
this.state={
books:[1],
title:'',
athure:'',
year:''


}
this.titlehandler=this.titlehandler.bind(this)
this.athourhandler=this.athourhandler.bind(this)
this.yearhandler=this.yearhandler.bind(this)
    }

    titlehandler(event){
        this.setState({
title:event.target.value

        })
    }
    athourhandler(event){
this.setState({

    athure:event.target.value
})

    }
    yearhandler(event){

        this.setState({
year:event.target.value

        })
    }
submithandel(event){
event.preventDefault() 
    let{title,athure,year}=this.state

if(title&&athure&&year){

let newbook={

id:this.state.books.length+1,
title,
athure,
year,

}

}


}
  render() {
    return (
      <div>

<h1 className='  flex justify-center  border-b-2 border-blue-400 my-16  w-full '>  <BsBookFill   className=' mt-1 mr-6   text-yellow-300    '/>Booklist    </h1>
<form className=' w-[70%] m-auto bg-orange-500 p-16 '  onSubmit={this.submithandel}>   
<div className=' my-14 '>

<h1>tittle</h1>
<input type=""   value={this.state.title}        onChange={this.titlehandler}      className=' rounded-3xl  border  w-full '/>

</div>
<div>
<h1>tittle</h1>
<input type="" value={this.state.athure}        onChange={this.athourhandler}     className='  rounded-3xl w-full '/>

</div>  
<div>
<h1>year</h1>
<input type="" value={this.state.year}        onChange={this.yearhandler}     className='  rounded-3xl w-full '/>

</div> 
<button   className='  my-7 rounded-full p-4 bg-orange-400 w-full '>Add Book</button>
</form>


<table className=' w-full  my-8'>

    <thead>

        <tr>
            <th>title</th>
            <th>atyhou</th>
            <th>year</th>
        </tr>
    </thead>
    <tbody>
        {this.state.books.map(book=>(

<Book/>
        ))}
       
    </tbody>
</table>
      </div>
    )
  }
}

export default Booklist

// git push origin master
// git commit -m "  added project  "
// git push origin master