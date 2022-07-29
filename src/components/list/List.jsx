import Todo from '../todo/Todo';
import './List.css';
import { useSelector } from 'react-redux';

const List = () => {
  useSelector((state) => state.todos.todos)
  const todos = useSelector((state) => state.todos.todos);
  return (
    <div className="list">
      <div className="todo--list">
        <span className="todo--list--title">할일..🔥</span>
        <div className="todo--list--card">
          {todos.map((todo) => {
            if (todo.isDone === false) {
              return <Todo todo={todo} key={todo.id} />;
            }
          })}
        </div>
      </div>
      <div className="donedo--list">
        <span className="donedo--list--title">완료..🎉</span>
        <div className="donedo--list--card">
          {todos.map((todo) => {
            if (todo.isDone === true) {
              return <Todo todo={todo} key={todo.id} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default List;
