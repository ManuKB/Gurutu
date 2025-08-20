import React, { use, useEffect, useState } from 'react';
import Modal from 'react-modal';

interface ListModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    phrase : string;
    setPhrase: (phrase: string) => void;
}

const PassPhraseModal: React.FC<ListModalProps> = ({ isOpen, onRequestClose, phrase, setPhrase }) => {
    const [inputPhrase, setInputPhrase] = useState("");
    const setValue = () => {
        setPhrase(inputPhrase);
        onRequestClose();
    };
    useEffect(() => {
        setInputPhrase("");
    }, [isOpen]);
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
            <h2> Enter your password phrase</h2>
            <input 
                type="text" 
                value={inputPhrase} 
                onChange={(e) => setInputPhrase(e.target.value)} 
            />
            <div className="bottom-action">
            <button onClick={setValue}>OK</button>
            </div>
        </Modal>
    );
};

export default PassPhraseModal;