import React, { useState } from "react";
import ToDoContext from './ToDoContext';

export default function ToDoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos(todos.concat(newTodo));
  };

  return (
    <main>
      <ToDoContext.Provider value={{ todos, addTodo }}>
        { children }
      </ToDoContext.Provider>
    </main>
  );
}