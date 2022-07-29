import styled from 'styled-components';

export const FormBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 3px solid #50586c;
`;
export const InputGroup = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
`;
export const InputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const InputBoxSpan = styled.span`
  font-weight: 700;
  color: #50586c;
`;
export const Input = styled.input`
  display: block;
  height: 30px;
  border: none;
  border-radius: 10px;
`;
export const ButtonGroup = styled.div`
  text-align: center;
  width: 20%;
`;
export const Button = styled.button`
  width: 120px;
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