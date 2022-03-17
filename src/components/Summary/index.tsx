import React, { useContext } from 'react';
import incomeImg  from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from "./styles";

export function Summary() {
  const transactions = useContext(TransactionsContext);

  console.log(transactions)

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
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Outcomes</p>
          <img src={outcomeImg} alt="Transaction Outcomes" />
        </header>
        <strong>-R$500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Transaction Totals" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}