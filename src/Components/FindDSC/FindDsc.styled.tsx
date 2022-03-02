import styled from 'styled-components';

export const ContainerFind = styled.div`
  display: grid;
  width: 100%;
  margin: 5px;
  justify-content: center;
  grid-template-columns: repeat(3, 35%);
  padding-bottom: 10%;
  @media screen and (min-width: ${({ theme }) => theme.bigScreen}) {
    grid-template-columns: repeat(3, 55%);
  }
`;
