import React, { Component } from 'react'

export default class APP extends Component {
    state={

        users:[
          {id:1,name:'mohammad',},
          {id:2,name:'ali', },
          {id:3,name:'acer', },
        ],
    
      }
  render() {
    return (
      <div>

<User {...this.state.users[0]} />
      </div>
    )
  }
}
