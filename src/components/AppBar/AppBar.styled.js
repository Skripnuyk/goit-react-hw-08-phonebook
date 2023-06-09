import styled from 'styled-components';

export const Header = styled.header`
  background: #66cdaa;
  opacity: 0.9;
  position: sticky;
  top: -1px;
  padding: 15px 30px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  border-bottom: 5px;
  box-shadow: 0px 10px 20px -2px #8fbc8f;
  & a {
    color: #000000;
  }
  & a.active {
    padding: 10px;
    color: #f0f8ff;
    border-radius: 20px;
    background: #556b2f;
  }
  & a.active svg {
    display: block;
  }
`;