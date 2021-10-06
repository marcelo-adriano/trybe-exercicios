import React from 'react';
import './App.css';
// import Componente from './Component';
// import Task from './exercicio02';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  // return (<Componente />);

  //Exercicio 02
  // const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];
  // return (<ul>{ tarefas.map(tarefa => Task(tarefa)) }</ul>);

  //Exercicio 03
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
