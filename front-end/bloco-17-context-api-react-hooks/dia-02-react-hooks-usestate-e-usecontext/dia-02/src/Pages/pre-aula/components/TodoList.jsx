import React, { useContext } from 'react';
import ToDoContext from '../context/ToDoContext';

export default function TodoList() {
  const { todos } = useContext(ToDoContext);
  return (
    <ul>
      {todos.map((todo) => (
        <li>{todo}</li>
      ))}
    </ul>
  );
}
