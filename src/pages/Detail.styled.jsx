import styled from 'styled-components';

export const DetailBox = styled.div`
  margin-top: 50vh;
  transform: translateY(-200px);
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(7px);
  border-radius: 20px;
`
export const DetailBoxHeader = styled.div`
  border-radius: 20px 20px 0 0;
  width: 100%;
  height: 10%;
  background-color: #50586c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #f0edcc;
`
export const DetailBoxHeaderId = styled.span`
  margin-left: 5px;
`

export const DetailBoxHeaderButton = styled.span`
  margin-right: 5px;
  &:hover {
    cursor: pointer;
  }
`

export const DetailBoxTodo = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const DetailBoxTodoText = styled.span`
  word-break: break-all;
  color: #50586c;
  font-size: xx-large;
  margin-left: 10px;
`

