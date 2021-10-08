import React from 'react';
import './Button.css'

class Button extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      cliques: 0,
    };
  }
  
  handleClick() {
    this.setState((estadoAnterior, _props) => ({
      cliques: estadoAnterior.cliques + 1,
    }), () => {
        console.log(`Botão ${this._reactInternals.key} ${this.getButtonColor(this.state.cliques)}`)
    });
  }

  getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    return <button className={this.getButtonColor(this.state.cliques)} onClick={this.handleClick}>{this.state.cliques}</button>
  }
}

export default Button;
