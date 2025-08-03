export interface User {
    id: number;
    username: string;
    email: string;
}

export interface ListItem {
    id: number;
    title: string;
    description: string;
}

export interface AuthContextType {
    user: User | null;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
}

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    item?: ListItem;
    onEdit: (item: ListItem) => void;
    onDelete: (id: number) => void;
}

export interface NavBarConfigItem {
    name: string;   
    smallsidebar?: boolean;
}