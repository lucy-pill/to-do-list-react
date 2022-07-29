import './Detail.css';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

const Detail = () => {
  const todos = [...useSelector((state) => state.todos.todos)];
  const { id } = useParams();
  const navigate = useNavigate();
  const todo = todos.filter((todo) => todo.id === id);
  return (
    <div className="detail">
      <div className="detail--header">
        <span className='id'>ID: {id.slice(-4)}</span>
        <span className="material-symbols-outlined button" onClick={() => navigate('/')}>
          cancel
        </span>
      </div>
      <div className="todo--text">
        <span className="title">{todo[0].title}</span>
        <span className="content">{todo[0].content}</span>
      </div>
    </div>
  );
};

export default Detail;
