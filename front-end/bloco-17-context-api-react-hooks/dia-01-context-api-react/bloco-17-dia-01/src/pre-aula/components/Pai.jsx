import React, { Component } from 'react'
import Filha from './Filha'

export default class Pai extends Component {
  render() {
    return (
      <div>
        <h3>pai</h3>
        <Filha />
      </div>
    )
  }
}
