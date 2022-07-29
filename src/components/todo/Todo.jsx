import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeTodo, finishTodo } from '../../redux/modules/todos';
import {
  TodoBox,
  TodoText,
  TodoTextTitle,
  TodoTextContent,
  TodoButtonGroup,
  TodoButton,
} from './Todo.styled';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <TodoBox>
      <TodoText>
        <TodoTextTitle>{todo.title}</TodoTextTitle>
        <TodoTextContent>{todo.content}</TodoTextContent>
      </TodoText>
      <TodoButtonGroup className="btn--todo">
        <TodoButton onClick={() => dispatch(removeTodo(todo.id))}>
          삭제
        </TodoButton>
        <TodoButton onClick={() => dispatch(finishTodo(todo.id))}>
          {todo.isDone ? '취소' : '완료'}
        </TodoButton>
        <TodoButton onClick={() => navigate(`/detail/${todo.id}`)}>
          상세보기
        </TodoButton>
      </TodoButtonGroup>
    </TodoBox>
  );
};

export default Todo;
