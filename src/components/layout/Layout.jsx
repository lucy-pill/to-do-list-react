import { useState } from 'react';
import Header from '../header/Header';
import Form from '../form/Form';
import List from '../list/List';

import './Layout.css';

const Layout = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title, content) => {
    const newTodo = {
      id: todos.length + 1,
      title: title,
      content: content,
      isDone: false,
    };

    const newTodos = [...todos, newTodo];

    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = [...todos].filter((todo) => todo.id !== id);

    setTodos(newTodos);
  };

  const finishTodo = (id) => {
    const newTodos = [...todos].map((todo) => {
      if (todo.id === id) todo.isDone = !todo.isDone;
      return todo;
    });

    setTodos(newTodos);
  };

  const cancelTodo = (id) => {
    const newTodos = [...todos].map((todo) => {
      if (todo.id === id) todo.isDone = !todo.isDone;
      return todo;
    });

    setTodos(newTodos);
  };

  return (
    <div className="layout">
      <Header />
      <Form addTodo={addTodo} />
      <List
        todos={todos}
        deleteTodo={deleteTodo}
        finishTodo={finishTodo}
        cancelTodo={cancelTodo}
      />
    </div>
  );
};

export default Layout;
