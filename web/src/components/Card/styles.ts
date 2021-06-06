import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  border-radius: 7px;
  background-color: #fff;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Title = styled.span`
  font-size: 1.1rem;
  font-weight: 400;
  color: #363F5F;
`;

export const ValueText = styled.span`
  font-size: 1.6rem;
  font-weight: 400;
  color: #363F5F;
  margin-top: 25px;
`;