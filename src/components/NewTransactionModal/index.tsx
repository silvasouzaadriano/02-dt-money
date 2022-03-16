import { useState } from 'react';
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
  const [transactionType, setTransactionType] = useState('deposit');

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

      <Container>
        <h2>Add New Transaction</h2>

        <input 
          placeholder='Title'
        />

        <input 
          type="number"
          placeholder='Amount'
        />
        
        <TransactionTypeContainer>
          <TransactionTypeRadioBox
            type="button"
            onClick={() => { setTransactionType('deposit'); }}
            isActive={transactionType === 'deposit'}
          >
            <img src={incomeImg} alt="Transaction income" />
            <span>Income</span>
          </TransactionTypeRadioBox>

          <TransactionTypeRadioBox
            type="button"
            onClick={() => { setTransactionType('withdraw'); }}
            isActive={transactionType === 'withdraw'}
          >
            <img src={outcomeImg} alt="Transaction outcome" />
            <span>Outcome</span>
          </TransactionTypeRadioBox>

        </TransactionTypeContainer>

        <input 
          placeholder='Category'
        />

        <button type="submit">
          Save
        </button>



      </Container>
    </Modal>
  )
}