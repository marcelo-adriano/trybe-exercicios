import React, { useContext, useState } from 'react';
import ToDoContext from '../context/ToDoContext';

export default function TodoInput() {
  const { addTodo } = useContext(ToDoContext);
  const [newTodo, setNewTodo] = useState('');

  const handleChange = ({ target }) => {
    setNewTodo(target.value);
  }

  const handleClick = () => {
    addTodo(newTodo);
    setNewTodo('');
  }

  return (
    <section>
      <label htmlFor="addTodo">
        Insira uma tarefa:
        <input
          value={newTodo}
          onChange={handleChange}
          type="text"
          name="newTodo"
          id="newTodo"
        />
      </label>
      <button type="button" onClick={handleClick}>Adicionar tarefa</button>
    </section>
  );
}
