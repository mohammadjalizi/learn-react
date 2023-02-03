import React, { Component } from 'react'

export default class  extends Component {
  render() {
    return (
     <tr>
        <th>{this.props.title}</th>
        <th>{this.props.athure}</th>
        <th>{this.props.year}</th>
     </tr>
    )
  }
}
