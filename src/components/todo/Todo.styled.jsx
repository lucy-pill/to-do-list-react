import styled from 'styled-components';

export const TodoBox = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(7px);
  border-radius: 10px;
`;
export const TodoText = styled.div`
  width: 280px;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 20px;
  height: 200px;
  max-height: 200px;
`;
export const TodoTextTitle = styled.span`
  word-break: break-all;
  color: #50586c;
  font-size: xx-large;
`;
export const TodoTextContent = styled.span`
  word-break: break-all;
  color: #50586c;
  font-size: large;
`;
export const TodoButtonGroup = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  min-height: 100px;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const TodoButton = styled.button`
  width: 80px;
  height: 40px;
  background-color: #50586c;
  font-weight: 700;
  border-radius: 20px;
  color: #f0edcc;
  border: none;
  &:hover {
    background-color: #f0edcc;
    color: #50586c;
    cursor: pointer;
    transition: 0.1s;
  }
`;