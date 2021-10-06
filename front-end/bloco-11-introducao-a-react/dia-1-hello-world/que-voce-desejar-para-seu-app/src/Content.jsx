import React, { Component } from 'react';

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
];

class Content extends Component {
    render() {
        return (
            <main className='conteudo'>
                { conteudos.map((elemento) => (
                    <div className='cartao'>
                        <h2>{`O conteúdo é: ${elemento.conteudo}`}</h2>
                        <p>{`Status: ${elemento.status}`}</p>
                        <p>{`Bloco: ${elemento.bloco}`}</p>
                    </div>
                ))}
            </main>
        );
    }
}

export default Content;