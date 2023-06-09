import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserName = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: #000000;
`;

export const Button = styled.button`
  background-color: #8fbc8f;
  display: flex;
  width: 120px;
  height: 40px;
  font-size: 25px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  border-radius: 15px;
  box-shadow: 0 5px #dcdcdc;
  &:hover {
    background-color: #556b2f;
    color: #f0f8ff;
  }
  &:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;