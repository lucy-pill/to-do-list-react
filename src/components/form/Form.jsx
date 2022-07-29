import { useState } from 'react';
import uuid from 'react-uuid';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/modules/todos';
import {
  FormBox,
  InputGroup,
  InputBox,
  InputBoxSpan,
  Input,
  ButtonGroup,
  Button,
} from './Form.styled';

const Form = () => {
  const [inputTitle, setInputTitle] = useState('');
  const [inputContent, setInputContent] = useState('');
  const dispatch = useDispatch();

  const addToDoList = () => {
    if (inputTitle === '' && inputContent === '') {
      alert('제목과 내용을 입력해주세요.');
      return false;
    } else if (inputTitle === '') {
      alert('제목을 입력해주세요.');
      return false;
    } else if (inputContent === '') {
      alert('내용을 입력해주세요.');
      return false;
    } else {
      dispatch(
        addTodo({
          id: uuid(),
          title: inputTitle,
          content: inputContent,
          isDone: false,
        })
      );
      setInputTitle('');
      setInputContent('');
    }
  };

  window.onkeydown = (event) => {
    if (event.keyCode === 13) addToDoList();
  };

  return (
    <FormBox>
      <InputGroup>
        <InputBox>
          <InputBoxSpan>제목</InputBoxSpan>
          <Input
            type="text"
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
            maxLength="18"
          />
        </InputBox>
        <InputBox>
          <InputBoxSpan>내용</InputBoxSpan>
          <Input
            type="text"
            value={inputContent}
            onChange={(e) => setInputContent(e.target.value)}
            maxLength="40"
            required
          />
        </InputBox>
      </InputGroup>
      <ButtonGroup>
        <Button onClick={addToDoList}>추가하기</Button>
      </ButtonGroup>
    </FormBox>
  );
};

export default Form;
