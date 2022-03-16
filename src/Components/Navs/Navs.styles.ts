import styled from 'styled-components';

const NavContainer = styled.nav`
  @keyframes stick {
    from {
      transform: translateY(-0.75em);
    }
    to {
      transform: translateY(0);
    }
  }

  width: 100%;
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.primary};
  box-shadow: 0px 0px 10px ${({ theme }) => theme.darkYellow};
  z-index: 501;
  position: absolute;
  left: 0;
  &.sticked {
    position: fixed;
    top: 0;
    animation: stick 600ms ease;
  }
  &.static {
    position: absolute;
    bottom: 0;
  }
`;
const NavsContainer = styled.nav`
  @keyframes stick {
    from {
      transform: translateY(-0.75em);
    }
    to {
      transform: translateY(0);
    }
  }

  width: 100%;
  padding: 1.5em;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${({ theme }) => theme.primary};
  box-shadow: 0px 0px 10px ${({ theme }) => theme.darkYellow};
  z-index: 501;
  position: absolute;
  left: 0;
  &.sticked {
    position: fixed;
    top: 0;
    animation: stick 600ms ease;
  }
  &.static {
    position: absolute;
    bottom: 0;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  cursor: pointer;
  @supports (gap: 0.5rem) {
    gap: 2vw;
    @media screen and (min-width: ${({ theme }) => theme.bigScreen}) {
      gap: calc(2em + 2vw);
    }
  }
`;
const ListS = styled.ul`
  list-style: none;
  display: flex;
  cursor: pointer;
  @supports (gap: 0.5rem) {
    gap: 2vw;
    @media screen and (min-width: ${({ theme }) => theme.bigScreen}) {
      gap: calc(2em + 2vw);
    }
  }
`;

export { NavContainer, NavsContainer, List, ListS };
