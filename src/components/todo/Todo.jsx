import './Todo.css';
import { removeTodo, finishTodo } from '../../redux/modules/todos';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="todo">
      <div className="todo--text">
        <span className="title">{todo.title}</span>
        <span className="content">{todo.content}</span>
      </div>
      <div className="btn--todo">
        <button onClick={() => dispatch(removeTodo(todo.id))}>삭제</button>
        <button onClick={() => dispatch(finishTodo(todo.id))}>
          {todo.isDone ? '취소' : '완료'}
        </button>
        <button onClick={() => navigate(`/detail/${todo.id}`)}>상세보기</button>
      </div>
    </div>
  );
};

export default Todo;