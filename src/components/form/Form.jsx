import { useState } from 'react';
import './Form.css';

const Form = ({ addTodo }) => {
  const [inputTitle, setInputTitle] = useState('');
  const [inputContent, setInputContent] = useState('');

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
      addTodo(inputTitle, inputContent);
      setInputTitle('');
      setInputContent('');
    }
  };

  if(window.event.keyCode === 13) {
    addToDoList();
  }


  return (
    <div className="form">
      <div className="input--grp">
        <div className="title">
          <span>제목</span>
          <input
            className="input--title"
            type="text"
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
            maxLength="18"
          />
        </div>
        <div className="content">
          <span>내용</span>
          <input
            className="input--content"
            type="text"
            value={inputContent}
            onChange={(e) => setInputContent(e.target.value)}
            maxLength="40"
            required
          />
        </div>
      </div>
      <div className="btn--add">
        <button onClick={addToDoList}>추가하기</button>
      </div>
    </div>
  );
};

export default Form;
