import Todo from '../todo/Todo';
import { useSelector } from 'react-redux';
import {ListBox, TodoList, TodoListTitle, TodoListCard } from './List.styled';

const List = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <ListBox>
      <TodoList>
        <TodoListTitle>할일..🔥</TodoListTitle>
        <TodoListCard>
          {todos.map((todo) => {
            if (todo.isDone === false) {
              return <Todo todo={todo} key={todo.id} />;
            }
          })}
        </TodoListCard>
      </TodoList>
      <TodoList>
        <TodoListTitle>완료..🎉</TodoListTitle>
        <TodoListCard>
          {todos.map((todo) => {
            if (todo.isDone === true) {
              return <Todo todo={todo} key={todo.id} />;
            }
          })}
        </TodoListCard>
      </TodoList>
    </ListBox>
  );
};

export default List;
