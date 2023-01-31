import React, { Component } from 'react'

export default class  extends Component {

  constructor(props){
super(props)

this.state={

submited:false

}
this.submithandel=this.submithandel.bind(this)

  }



  submithandel(){


  }
  render() {
    return (
      <div>


<div className='from'>


<form className=''  onSubmit={this.submithandel}  autoComplete="off">


</form>


</div>

      </div>
    )
  }
}
