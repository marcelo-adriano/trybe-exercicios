import React from 'react';

class Input extends React.Component {
  render() {
    const { tipo, funcao, nome, valor } = this.props;
    return (
      <label>
        <input
          type={tipo}
          id={nome}
          onChange={funcao}
          name={nome}
          value={valor}
        ></input>
      </label>
    );
  }
}

export default Input;
