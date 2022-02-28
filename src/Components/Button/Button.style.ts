import styled from 'styled-components';

const ButtonStyle = styled.button`
  background: ${({ theme }) => theme.green};
  border-radius: 3px;
  width: 100%;
  border: none;
  color: ${({ theme }) => theme.black};
  margin: 1rem auto;
  font-size: 1rem;
  padding: 0.5em 1em;
  &:hover {
    transform: translate(0, 0);
    box-shadow: none;
    background-color: inherit;
    color: ${({ theme }) => theme.black};
    cursor: pointer;
  }
`;
const ButtonMSStyle = styled.button`
  background: ${({ theme }) => theme.green};
  border-radius: 3px;
  width: 20%;
  border: none;
  position: absolute;
  color: ${({ theme }) => theme.black};
  margin: 1rem auto;
  font-size: 1rem;
  padding: 0.5em 1em;
  &:hover {
    transform: translate(0, 0);
    box-shadow: none;
    background-color: inherit;
    color: ${({ theme }) => theme.darkYellow};
    cursor: pointer;
  }
`;
export { ButtonStyle, ButtonMSStyle };
