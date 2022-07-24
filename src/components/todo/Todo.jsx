import './Todo.css';

const Todo = ({ todo, deleteTodo, finishTodo, cancelTodo }) => {
  return (
    <div className="todo">
      <div className="todo--text">
        <span className="title">{todo.title}</span>
        <span className="content">{todo.content}</span>
      </div>
      <div className="btn--todo">
        <button onClick={() => deleteTodo(todo.id)}>삭제</button>
        <button onClick={() => finishTodo(todo.id)}>
          {todo.isDone ? '취소' : '완료'}
        </button>
      </div>
    </div>
  );
};

export default Todo;
