import React, { useEffect, useState } from 'react';

import { CardsContainer, Container, Header, Logo, Main, NewTransaction, NewTransactionText, OverlayModal, TransactionContainer, TransactionTable } from './styles';
import { FiEdit, FiPlus, FiXCircle } from 'react-icons/fi';

import Card from '../../components/Card';

import logo from '../../assets/logo.svg';
import TransactionModal from '../../components/TransactionModal';

interface ITransaction {
  id?: number;
  description: string;
  value: number;
  date: string;
}

function Home() {

  const [receiveValue, setReceiveValue] = useState<number>(0);
  const [expenseValue, setExpenseValue] = useState<number>(0);
  const [totalValue, setTotalValue] = useState<number>(0);
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [transactionEdit, setTransactionEdit] = useState<ITransaction | null>(null);

  const [modalActive, setModalActive] = useState<boolean>(false);

  function removeTransaction(transaction: ITransaction) {

    const transactionsFiltered = transactions.filter(t => t.id!==transaction.id);

    saveTransactions(transactionsFiltered);

  }

  function createTransaction(transaction: ITransaction) {

    const transactionData: ITransaction = { id: new Date().getTime(), ...transaction };

    saveTransactions([...transactions, transactionData]);

    setModalActive(false);

  }

  function handleEdit(transaction: ITransaction) {

    setTransactionEdit(transaction);

    setModalActive(true);

  }

  function cancelTransaction() {
    setModalActive(false);
    setTransactionEdit(null);
  }

  function editTransaction(transaction: ITransaction) {

    let transactionsUpdated: ITransaction[] = [];
    transactions.map(t => {
      if(t.id === transaction.id) transactionsUpdated.push(transaction);
      else transactionsUpdated.push(t);
    });

    setModalActive(false);

    setTransactionEdit(null);
    
    saveTransactions(transactionsUpdated);
    
  }

  async function saveTransactions(transactionsUpdated: ITransaction[]) {

    if(!transactions) return;

    setTransactions(transactionsUpdated);

    await localStorage.setItem('transactions', JSON.stringify(transactionsUpdated));

  }

  async function loadTransactions() {
    
    const storagedData: string | null = await localStorage.getItem('transactions');
    if(!storagedData) return;
    
    const stored: ITransaction[] = JSON.parse(storagedData);
    setTransactions(stored);

  }

  useEffect(() => {
    loadTransactions();
  }, []);

  useEffect(() => {
    if(transactions) {
      let receive = 0;
      let expend = 0;
      let total = 0;
      transactions.map(tr => {
        if(tr.value > 0) receive += tr.value;
        if(tr.value <= 0) expend += tr.value;
        total+=tr.value;
      });

      setReceiveValue(receive);
      setExpenseValue(expend);
      setTotalValue(total);
    }
  }, [transactions])

  return (
    <Container style={{ overflow: modalActive?'hidden':'' }}>
      {modalActive && (
        <OverlayModal>
          <TransactionModal onCancel={cancelTransaction} onSubmit={createTransaction} onEdit={editTransaction} transaction={transactionEdit} />
        </OverlayModal>
      )}
      <Header>
        <Logo src={logo} alt="logo_devFinances" />
      </Header>
      <Main>
        <CardsContainer>
          <Card type='e' value={receiveValue} />
          <Card type='s' value={expenseValue} />
          <Card type='t' value={totalValue} />
        </CardsContainer>
        <TransactionContainer>
          <NewTransaction onClick={() => setModalActive(true)}>
            <FiPlus size={15} color="#069c56" />
            <NewTransactionText>Nova Transação</NewTransactionText>
          </NewTransaction>
          <TransactionTable>
            <thead>
              <tr>
                <th>Descrição</th>
                <th>Valor</th>
                <th>Data</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(transaction => (
                <tr key={transaction.id}>
                  <td className="description">
                    {transaction.description}
                  </td>

                  <td className={transaction.value>0?'receive':'expense'}>
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(transaction.value)}
                  </td>

                  <td>{transaction.date}</td>

                  <td className="actions">
                    <FiEdit onClick={() => handleEdit(transaction)} size={25} color="#363f5f" />
                    <FiXCircle onClick={() => removeTransaction(transaction)} size={25} color="#f93838" />
                  </td>
                </tr>
              ))}
            </tbody>
          </TransactionTable>
        </TransactionContainer>
      </Main>
      
    </Container>
  );
}

export default Home;