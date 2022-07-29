import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: { todos: [] },
  reducers: {
    addTodo: (state, action) => {
      console.log(action);
      const newTodos = [...state.todos, action.payload];
      state.todos = newTodos;
    },
    removeTodo: (state, action) => {
      const newTodos = [...state.todos].filter(
        (todo) => todo.id !== action.payload
      );
      state.todos = newTodos;
    },
    finishTodo: (state, action) => {
      const newTodos = [...state.todos].map((todo) => {
        if (todo.id === action.payload) todo.isDone = !todo.isDone;
        return todo;
      });
      state.todos = newTodos;
    },
    cancelTodo: (state, action) => {
      const newTodos = [...state.todos].map((todo) => {
        if (todo.id === action.payload) todo.isDone = !todo.isDone;
        return todo;
      });
      state.todos = newTodos;
    },
  },
});

export const { addTodo, removeTodo, finishTodo, cancelTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
 