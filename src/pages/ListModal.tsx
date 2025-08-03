import React, { useState } from 'react';
import Modal from 'react-modal';

interface ListModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    item: { id: number; name: string };
    onEdit: (item: { id: number; name: string }) => void;
    onDelete: (id: number) => void;
}

const ListModal: React.FC<ListModalProps> = ({ isOpen, onRequestClose, item, onEdit, onDelete }) => {
    const [name, setName] = useState(item.name);

    const handleEdit = () => {
        onEdit({ ...item, name });
        onRequestClose();
    };

    const handleDelete = () => {
        onDelete(item.id);
        onRequestClose();
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
            <h2>Edit Item</h2>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <button onClick={handleEdit}>Save</button>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={onRequestClose}>Cancel</button>
        </Modal>
    );
};

export default ListModal;