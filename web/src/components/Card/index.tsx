import React from 'react';

import { FiArrowDownCircle, FiArrowUpCircle, FiDollarSign } from 'react-icons/fi';

import { Container, Header, Title, ValueText } from './styles';

interface IParam {
  type: string;
  value: number;
}

function Card({ type, value} : IParam) {

  return (
    <Container 
      style={{ 
        backgroundColor: 
          type.toLowerCase()==='t'
            ? (value>=0 ? '#069c56' : '#e85656')
            :'#fdfdfd'
      }}
    >
      
      <Header>
        <Title
          style={{
            color: type.toLowerCase()==='t'
              ? '#fdfdfd'
              : '#363f5f'
          }}
        >
          {type.toLowerCase()==='e'?'Entradas':(type.toLowerCase()==='s'?'Saídas':'Total')}
        </Title>

        {type.toLowerCase()==='e'
          ? <FiArrowUpCircle size={35} color='#006b3d' />
          : (
            type.toLowerCase()==='s'
              ? <FiArrowDownCircle size={35} color='#f93838' />
              : <FiDollarSign size={35} color='#fdfdfd' />
          )
        }

      </Header>
      <ValueText
        style={{
          color: type.toLowerCase()==='t'
            ? '#fdfdfd'
            : (value>0 
                ? '#069c56' 
                : (value===0 ? '#969cb3' : '#f93838'))
        }}
      >
        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)}
      </ValueText>

    </Container>
  );
}

export default Card;