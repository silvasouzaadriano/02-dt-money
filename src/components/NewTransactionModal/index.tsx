import Modal from 'react-modal';

import { Container } from './styles';

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
      <Container>
        <h2>Add New Transaction</h2>

        <input 
          placeholder='Title'
        />

        <input 
          type="number"
          placeholder='Amount'
        />

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