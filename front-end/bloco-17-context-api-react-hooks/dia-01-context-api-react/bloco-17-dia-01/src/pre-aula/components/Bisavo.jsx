import React, { Component } from 'react'
import Avo from './Avo';
import FamilyContext from '../context/FamilyContext';

export default class Bisavo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inheritance: 1000000,
    }
    this.spendInheritance = this.spendInheritance.bind(this);
  }

  spendInheritance() {
    this.setState((prevState) => (
      { inheritance: prevState.inheritance - 1000 }
    ));
  }

  render() {
    const contextValues = {
      money: this.state.inheritance,
      spendMoney: this.spendInheritance,
    };
    return (
      <FamilyContext.Provider value={ contextValues }>
        <div>
          <h1>bisavô</h1>
          <Avo />
        </div>
      </FamilyContext.Provider>
    );
  }
}
