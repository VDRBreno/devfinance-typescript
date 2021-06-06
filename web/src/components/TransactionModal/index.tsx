import React, { useState } from 'react';

import { ButtonCancel, ButtonSave, ButtonsContainer, Container, InputDate, InputDescription, InputValue, Title } from './styles';

interface ITransaction {
  id?: number;
  description: string;
  value: number;
  date: string;
}

interface IParam {
  onCancel: () => void;
  onSubmit: (transaction: ITransaction) => void;
  onEdit: (transaction: ITransaction) => void;
  transaction: ITransaction | null;
}

function TransactionModal({ onCancel, onSubmit, onEdit, transaction } : IParam) {

  const [description, setDescription] = useState<string>(transaction?transaction.description:'');
  const [value, setValue] = useState<number>(transaction?transaction.value:0);
  const [date, setDate] = useState<string>(transaction?transaction.date.split('/').reverse().join('-'):'');

  function submitData() {

    if(!description || !value || !date) {
      alert('Preencha todos os campos!');
      return;
    }

    if(transaction) {
      onEdit({ 
        id: transaction.id, 
        description, 
        value, 
        date: date.split('-').reverse().join('/') 
      });
      
      return;
    }

    setDescription('');
    setValue(0);
    setDate('');

    onSubmit({ description, value, date: date.split('-').reverse().join('/') });
  }

  return (
    <Container>
      <Title>Nova Transação</Title>
      <InputDescription
        placeholder="Descrição"
        type="text"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <InputValue
        placeholder="0,00"
        type="number"
        value={value}
        onChange={e => setValue(parseInt(e.target.value)||0)}
      />
      <InputDate
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
      />
      <ButtonsContainer>
        <ButtonCancel onClick={onCancel}>Cancelar</ButtonCancel>
        <ButtonSave onClick={submitData}>Salvar</ButtonSave>
      </ButtonsContainer>
    </Container>
  );
}

export default TransactionModal;