import styled from 'styled-components';

export const InputPassStyle = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  color: 'palevioletred';
  border: none;
  width: 100%;
  border-radius: 3px;
  outline: none;
  box-shadow: -0.1em 0.1em 0 ${({ theme }) => theme.blue};
`;
export const InputEmailStyle = styled.input.attrs({
  type: 'email',
})`
  padding: 0.5rem;
  margin: 1rem auto;
  color: 'palevioletred';
  border: none;
  width: 100%;
  border-radius: 3px;
  outline: none;
  box-shadow: -0.1em 0.1em 0 ${({ theme }) => theme.blue};
`;
export const InputStyle = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  color: 'palevioletred';
  border: none;
  width: 100%;
  border-radius: 3px;
  outline: none;
  box-shadow: -0.1em 0.1em 0 ${({ theme }) => theme.blue};
`;
