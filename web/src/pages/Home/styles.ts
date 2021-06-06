import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

export const OverlayModal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.6);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Header = styled.div`
  width: 100%;
  height: 220px;
  background-color: #006B3D;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const Logo = styled.img`
  width: 220px;
  margin-top: 50px;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 20px;
  max-width: 1200px;
  margin-top: -100px;
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;

  @media screen and (max-width: 850px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const TransactionContainer = styled.div`
  margin-top: 40px;
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
`;

export const NewTransaction = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px;
  border-radius: 5px;
  border: thin solid #069c56;
  color: #069c56;

  &:hover {
    cursor: pointer;
    color: #fdfdfd;
    border: thin solid #fdfdfd;
    background-color: #069c56;

    svg {
      stroke: #fdfdfd;
    }
  }
`;

export const NewTransactionText = styled.span`
  font-size: 1rem;
  font-weight: 300;
  margin-left: 5px;
`;

export const TransactionTable = styled.table`
  width: 100%;
  margin-top: 20px;
  border-spacing: 0 7px;
  color: #969cb3;
  text-align: left;

  thead th:last-child,
  tbody td:last-child {
    border-radius: 0 5px 5px 0;
  }

  thead th:first-child,
  tbody td:first-child {
    border-radius: 5px 0 0 5px;
  }

  thead th, tbody td {
    background: #fdfdfd;
    font-weight: 400;
    padding: 10px 20px;
  }

  tbody tr {
    transition: 0.2s;
  }

  tbody tr:hover {
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);
  }

  td.description { color: #363f5f }
  td.receive { color: #006b3d }
  td.expense { color: #f93838 }
  td.actions { width: 150px; svg:first-child { margin-right: 30px } }

  td svg:hover {
    cursor: pointer;
    filter: brightness(70%);
  }
`;