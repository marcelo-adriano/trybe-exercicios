import React, { Component } from 'react';
import FamilyContext from '../context/FamilyContext';

export default class Filha extends Component {
  render() {
    return (
      <div>
        <h4>filha</h4>
        <FamilyContext.Consumer>
          {
            (value) => (
              <div>
                <p>{ `Tenho uma herança de R$ ${value.money} que recebi do meu bisavô` }</p>
                <button type="button" onClick={value.spendMoney}>
                  Gastar Herança!
                </button>
              </div>
            )
          }
        </FamilyContext.Consumer>
      </div>
    );
  }
}
