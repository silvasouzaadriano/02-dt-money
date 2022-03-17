import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, TransactionTypeContainer, TransactionTypeRadioBox } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}


export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [transactionType, setTransactionType] = useState('deposit');

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    console.log(
      title,
      amount,
      category,
      transactionType
    )
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className="react-modal-content"
    >
      <button
       type="button"
       onClick={onRequestClose}
       className="react-modal-close"
      >
        <img src={closeImg} alt="Close the Add transaction modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Add New Transaction</h2>

        <input 
          placeholder='Title'
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input 
          type="number"
          placeholder='Amount'
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />
        
        <TransactionTypeContainer>
          <TransactionTypeRadioBox
            type="button"
            onClick={() => { setTransactionType('deposit'); }}
            isActive={transactionType === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Transaction income" />
            <span>Income</span>
          </TransactionTypeRadioBox>

          <TransactionTypeRadioBox
            type="button"
            onClick={() => { setTransactionType('withdraw'); }}
            isActive={transactionType === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Transaction outcome" />
            <span>Outcome</span>
          </TransactionTypeRadioBox>

        </TransactionTypeContainer>

        <input 
          placeholder='Category'
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">
          Save
        </button>



      </Container>
    </Modal>
  )
}