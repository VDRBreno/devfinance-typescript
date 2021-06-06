import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: #efefef;
  border-radius: 10px;
  padding: 40px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-size: 1.4rem;
  color: #363f5f;
`;

export const InputDescription = styled.input`
  border: none;
  padding: 7px 15px;
  border-radius: 5px;
  font-size: 1.3rem;
  margin-top: 15px;

  &::placeholder {
    color: #aaa;
    font-weight: 300;
  }
`;

export const InputValue = styled.input`
  border: none;
  padding: 7px 15px;
  border-radius: 5px;
  font-size: 1.3rem;
  margin-top: 15px;

  &::placeholder {
    color: #aaa;
    font-weight: 300;
  }
`;

export const InputDate = styled.input`
  border: none;
  padding: 7px 15px;
  border-radius: 5px;
  font-size: 1.3rem;
  margin-top: 15px;
`;

export const ButtonsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonCancel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: thin solid #f93838;
  border-radius: 10px;
  width: calc(50% - 10px);
  height: 50px;
  color: #f93838;
  font-size: 1.3rem;
  font-weight: 500;

  &:hover {
    cursor: pointer;
    background-color: #f93838;
    color: #fdfdfd;
    filter: brightness(80%);
  }
`;

export const ButtonSave = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #006b3d;
  border-radius: 10px;
  width: calc(50% - 10px);
  height: 50px;
  color: #fdfdfd;
  font-size: 1.3rem;
  font-weight: 500;

  &:hover {
    cursor: pointer;
    filter: brightness(80%);
  }
`;