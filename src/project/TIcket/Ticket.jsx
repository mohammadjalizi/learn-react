import React, { Component } from 'react'

export default class Ticket extends Component {
constructor(props){
super(props)

this.state={

    countinersData:{
iran:["tabriz","Ahwaz","shiraz"," tehran"],
turket:['istanbul',"ezmair","Ankara"],
Us:["los Anglos","san Diego"]


    },
    maincountriscity:[]
}


this.selecthandel=this.selecthandel.bind(this)
}
selecthandel(event){
   let maincountry= event.target.value
   let mainCiti=this.state.countinersData[maincountry]
console.log( mainCiti  )
this.setState({

maincountry:mainCiti
})
}





  render() {
    return (
      <div className='  bg-orange-400 '>
        <div className=' flex first-letter:bg-lime-200   my-20  justify-center'>   
        <div>

            <input  className=' mt-5 p-2  border  rounded-3xl shadow-2xl'      placeholder='Firstname'/>

           
        </div>

        <div>

        <input className=' mt-5 p-2  border  rounded-3xl shadow-2xl'   placeholder='phon number'/>

        </div>

        <div>

        <input  className=' mt-5 p-2  border  rounded-3xl shadow-2xl'     placeholder='Email'/>

        </div>
        </div>
        <div className=' flex justify-between w-[50%] m-auto'>  
        <div className=' col'>
<select className=''  onChange={this.selecthandel}>
<option value="-1" > ...please select  </option>
<option className='' value="iran">iran</option>
<option className='' value="turket">turket</option>
<option className='' value="Us">Us</option>
</select>


        </div>

        <div className=' mb-12'>

            <select>
    {this.state.maincountriscity.length&&this.state.length.mainCiti.map(city=>(

<option value={city}>{city}</option>

    ))}
         
            </select>
        </div>
        </div>
      </div>
    )
  }
}
