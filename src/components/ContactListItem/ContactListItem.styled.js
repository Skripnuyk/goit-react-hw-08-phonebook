import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 20px;
`;

export const Button = styled.button`
  background-color: #f08080;
  display: flex;
  width: 75px;
  min-height: 75px;
  font-size: 20px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  border-radius: 50px;
  box-shadow: 0 6px #dcdcdc;
  &:hover {
    background-color: #ff0000;
    color: #f0f8ff;
  }
  &:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;
