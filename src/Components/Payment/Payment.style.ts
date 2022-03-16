import styled from 'styled-components';

export const PContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const P = styled.p`
  font-size: 1rem;
  color: #333;
  text-align: center;
`;
export const H3 = styled.h3`
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
  text-align: center;
  margin-bottom: 10px;
  &:hover {
    color: ${({ theme }) => theme.blue};
  }
`;
export const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
export const Alink = styled.a`
  font-size: 1rem;
  color: #333;
  text-align: center;
  &:hover {
    color: blue;
  }
`;
