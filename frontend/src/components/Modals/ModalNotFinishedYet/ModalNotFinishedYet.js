import './ModalNotFinishedYet.css'
import Modal from 'react-modal';
import { useState } from 'react';
import LoginButton from '../../Buttons/LoginButton/LoginButton';

function ModalNotFinishedYet() {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const openModal = () => {
		setModalIsOpen(true);
	};

	const closeModal = () => {
		setModalIsOpen(false);
	};

	const modalContent = (
		<div>
			<p className='modal-not-finished-yet-text'>Unfortunately, this feature is not ready yet. Come back later.</p>
			<button className='modal-not-finished-yet-close-button' onClick={closeModal}>Close</button>
		</div>
	);
	return (
		<div>
			<button className="modal-not-finished-yet-button" onClick={openModal}><LoginButton onClick={openModal} buttonText="Login | Sign Up" /></button>
			<Modal className='modal-not-finished-yet' isOpen={modalIsOpen} onRequestClose={closeModal}>
				{modalContent}
			</Modal>
		</div>
	);
}

export default ModalNotFinishedYet

