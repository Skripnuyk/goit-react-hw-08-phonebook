import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  gap: 30px;
`;
export const AuthLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  text-decoration: none;
  &:hover,
  :focus {
    color: #f0f8ff;
  }
`;