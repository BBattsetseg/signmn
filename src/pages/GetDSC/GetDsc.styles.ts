import styled from 'styled-components';

// const Container = styled.div`
//   width: 100%;
//   height: 100vh;
//   padding: 1.5em;
//   display: flex;
//   display: ${(props) => (props.open ? 'block' : 'none')};
//   flex-direction: column;
//   align-items: center;
//   background: ${({ theme }) => theme.dark};
//   z-index: 2000;
//   position: absolute;
//   top: 0;
//   left: 0;
//   cursor: pointer;
// `;

// const ModalContainer = styled.div`
//   width: 70%;
//   padding: 1.5em;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background: ${({ theme }) => theme.green};
//   box-shadow: 0px 0px 8px ${({ theme }) => theme.darkYellow};
//   top: 50%;
//   left: 50%;
//   margin: auto;
//   curcor: pointer;
// `;

const List = styled.ul`
  list-style: none;
  display: flex;
  @supports (gap: 0.5rem) {
    gap: 1.5vw;
    @media screen and (min-width: ${({ theme }) => theme.bigScreen}) {
      gap: calc(2em + 2vw);
    }
  }
`;

export { List };

// <List>
// <InputEmail />
// <p style={{ color: '#333', fontSize: '12px' }}>эсвэл</p>
// <InputPhone />
// <button
//   style={{ padding: '8px' }}
//   onClick={() =>
//     alert('Та манай сайтад бүртгэлтэй байна. Өөрийн нууц үгээрээ нэвтэрч орно уу.')
//   }
// >
//   шалгах
// </button>
// </List>
