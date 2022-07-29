import './Detail.styled.jsx';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import {
  DetailBox,
  DetailBoxHeader,
  DetailBoxHeaderId,
  DetailBoxHeaderButton,
  DetailBoxTodo,
  DetailBoxTodoText,
} from './Detail.styled';

const Detail = () => {
  const todos = [...useSelector((state) => state.todos.todos)];
  const { id } = useParams();
  const navigate = useNavigate();
  const todo = todos.filter((todo) => todo.id === id);
  return (
    <DetailBox>
      <DetailBoxHeader>
        <DetailBoxHeaderId>ID: {id.slice(-4)}</DetailBoxHeaderId>
        <DetailBoxHeaderButton
          className="material-symbols-outlined"
          onClick={() => navigate('/')}
        >
          cancel
        </DetailBoxHeaderButton>
      </DetailBoxHeader>
      <DetailBoxTodo>
        <DetailBoxTodoText>{todo[0].title}</DetailBoxTodoText>
        <DetailBoxTodoText>{todo[0].content}</DetailBoxTodoText>
      </DetailBoxTodo>
    </DetailBox>
  );
};

export default Detail;
