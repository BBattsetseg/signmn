import styled from 'styled-components';
import { Theme } from '../../../StyledComponents/Theme';

const ListLink = styled.li`
  display: flex;
  justify-content: center;
  @supports (not (gap: 5px)) {
    margin: 0 max(4.5vw, 3em);
  }
`;

export type LinkType = {
  primary?: string | undefined;
  secondary?: string | undefined;
};
const LinkAnchor = styled.a<LinkType>`
  height: 100%;
  width: 100%;
  text-decoration: none;
  color:  ${(props: LinkType) => (props.primary ? Theme.darkYellow : Theme.black)};
  background: ${(props: LinkType) =>
    props.primary ? Theme.primary : props.secondary ? Theme.blue : Theme.green};
  border: 1px solid ${({ theme }) => theme.black};
  border-color:  ${(props: LinkType) => (props.secondary ? Theme.darkYellow : Theme.black)};
  box-shadow: -0.2em 0.2em 0 ${({ theme }) => theme.blue};
  transform: translate(0.25em, -0.25em);
  transition: all ease-in-out 200ms;
  transition-property: transform, box-shadow;
  padding: 0.5em 0.5em;
  font-size: 1rem;
  font-weight: 600;
  text-align: center

  &:focus {
    box-shadow: 0em 0em transparent;
    outline: 2px solid ${({ theme }) => theme.black};
    outline-offset: 2px;
    border-color: trnsparent;
    transform: translate(0, 0);
    color: ${({ theme }) => theme.black};
  }

  &:hover {
    transform: translate(0, 0);
    box-shadow: none;
    background-color: ${({ theme }) => theme.darkYellow};
    color: ${({ theme }) => theme.black};
  }

  & > svg {
    width: 2.25em;
    height: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.bigScreen}) {
    padding: 0.45em 0.75em;

    & > svg {
      width: 1.5em;
    }
  }
`;

export { ListLink, LinkAnchor };
