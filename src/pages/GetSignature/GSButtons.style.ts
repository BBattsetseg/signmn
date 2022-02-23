import styled from 'styled-components';
import { Theme } from '../../StyledComponents/Theme';

export const Container = styled.div`
  width: 80%;
  height: 60%;
  background: green;
  display: flex;
  justify-content: center;
`;
export const P = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2.5;
  color: ${Theme.black};
`;
