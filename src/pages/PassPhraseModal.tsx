import React, { useState } from 'react';
import Modal from 'react-modal';

interface ListModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    phrase : string;
    setPhrase: (phrase: string) => void;
}

const PassPhraseModal: React.FC<ListModalProps> = ({ isOpen, onRequestClose, phrase, setPhrase }) => {

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
            <h2> Enter your password phrase</h2>
            <input 
                type="text" 
                value={phrase} 
                onChange={(e) => setPhrase(e.target.value)} 
            />
            <div className="bottom-action">
            <button onClick={onRequestClose}>OK</button>
            </div>
        </Modal>
    );
};

export default PassPhraseModal;