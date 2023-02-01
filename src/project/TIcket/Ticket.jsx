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



}




  render() {
    return (
      <div>
        <div>

            <input   placeholder='Firstname'/>

           
        </div>

        <div>

        <input   placeholder='phon number'/>

        </div>
      </div>
    )
  }
}
