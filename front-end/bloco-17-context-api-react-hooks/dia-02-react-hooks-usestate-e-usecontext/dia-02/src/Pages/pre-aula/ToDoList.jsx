import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import ToDoProvider from './context/ToDoProvider';

export default function ToDoList() {
  return (
    <main>
      <ToDoProvider>
        <TodoInput />
        <TodoList />
      </ToDoProvider>
    </main>
  );
}
