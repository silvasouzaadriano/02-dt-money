import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}


export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
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
          <button
            type="button"
          >
            <img src={incomeImg} alt="Transaction income" />
            <span>Income</span>
          </button>

          <button
            type="button"
          >
            <img src={outcomeImg} alt="Transaction outcome" />
            <span>Outcome</span>
          </button>

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