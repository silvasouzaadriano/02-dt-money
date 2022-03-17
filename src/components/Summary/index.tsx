import React, { useContext } from 'react';
import incomeImg  from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount
      acc.total += transaction.amount
    } else {
      acc.witdhdraws += transaction.amount
      acc.total -= transaction.amount
    }
    return acc;
  }, {
    deposits: 0,
    witdhdraws: 0,
    total: 0,
  })

  return (
    <Container>
      {/* Old way to consume data context
       <TransactionsContext.Consumer>
        {(data) => {
          console.log(data)

          return <p>ok</p>
        }}
      </TransactionsContext.Consumer> */}
      <div>
        <header>
          <p>Incomes</p>
          <img src={incomeImg} alt="Transaction Incomes" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Outcomes</p>
          <img src={outcomeImg} alt="Transaction Outcomes" />
        </header>
        <strong>
          - 
          {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(summary.witdhdraws)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Transaction Totals" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}