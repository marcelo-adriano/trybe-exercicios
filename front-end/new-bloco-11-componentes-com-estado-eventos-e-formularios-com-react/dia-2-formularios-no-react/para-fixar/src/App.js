import React from 'react';
import './App.css'
import Input from './Input';

class App extends React.Component {
  constructor() {
    super();

    this.manterValor = this.manterValor.bind(this);
    this.state = {
      selecionado: '',
      nome: '',
      idade: 0,
      checkboxBox: false,
      textoDaCaixa: '',
    }
  };

  manterValor({ target }) {
    const { name, checked, value, type } = target;
    const valor = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: valor,
    })
  }

  render() {
    const { manterValor, state } = this;
    const { selecionado, nome, idade, checkboxBox, textoDaCaixa } = state;
    return (
      <form>
        <select name='selecionado' onChange={ manterValor } value={ selecionado }>
          <option value='Valor 1'>Valor 1</option>
          <option value='Valor 2'>Valor 2</option>
          <option value='Valor 3'>Valor 3</option>
        </select>
        <Input tipo='number' funcao={ manterValor } nome='idade' valor={ idade } />
        <Input tipo='text' funcao={ manterValor } nome='nome' valor={ nome } />
        <Input tipo='checkbox' funcao={ manterValor } nome='checkboxBox' valor={ checkboxBox } />
        <textarea name='textoDaCaixa' onChange={ manterValor } value={ textoDaCaixa }></textarea>
      </form>
    );
  }
}

export default App;
