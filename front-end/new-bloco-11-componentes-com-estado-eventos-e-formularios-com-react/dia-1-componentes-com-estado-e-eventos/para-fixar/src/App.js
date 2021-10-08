import React from 'react';
import Button from './Button';
import './App.css';

/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */
class App extends React.Component {
  render() {
    return (
      <div>
        <Button key={1} />
        <Button key={2} />
        <Button key={3} />
      </div>
    );
  }
}

export default App;
