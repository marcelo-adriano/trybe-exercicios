import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Dia17 extends Component {
  render() {
    return (
    <div>
      <Link to="/pre-aula">Pré Aula</Link>
      <br/>
      <Link to="/pos-aula">Pos Aula</Link>
    </div>);
  }
}
