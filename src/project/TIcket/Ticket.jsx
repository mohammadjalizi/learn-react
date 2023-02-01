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

        <div>

        <input   placeholder='Email'/>

        </div>

        <div className=' col'>
<select className=''  onChange={this.selecthandel}>
<option value="-1" > ...please select  </option>
<option className='' value="iran">iran</option>
<option className='' value="iran">turket</option>
<option className='' value="iran">Us</option>
</select>


        </div>

        <div>

            <select>
                <option value="-1">please selct city</option>
            </select>
        </div>
      </div>
    )
  }
}
