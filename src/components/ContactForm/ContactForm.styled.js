import { Form, Field, Formik } from 'formik';
import styled from 'styled-components';

export const FormikWrap = styled(Formik)``;

export const FormBox = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  margin-bottom: 50px;
`;

export const InputName = styled(Field)`
  display: block;
  width: 600px;
  height: 40px;
  margin-bottom: 20px;
  padding-left: 10px;
  font-size: 20px;
  border-radius: 10px;
`;

export const InputPhone = styled(InputName)``;

export const Button = styled.button`
  background-color: #8fbc8f;
  display: flex;
  width: 200px;
  margin-top: 70px;
  min-height: 70px;
  font-size: 25px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  border-radius: 25px;
  box-shadow: 0 6px #dcdcdc;
  &:hover {
    background-color: #556b2f;
    color: #f0f8ff;
  }
  &:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

export const Message = styled.p``;

export const Label = styled.label``;