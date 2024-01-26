import React, { createContext, useState } from 'react';
import { Book } from '../../types/types';

export interface ModalContext {
    isModalOpen: boolean;
    setIsModalOpen: (x: boolean) => void;
    bookInfo: Book;
    setBookInfo: (x: Book) => void;
}

const defaultContext: ModalContext = {
    isModalOpen: false,
    setIsModalOpen: () => {},
    bookInfo: {
        title: '',
        author: '',
        pubYear: 0,
        series: '',
        coverImg: '',
    },
    setBookInfo: () => {},
};

export const modalContext = createContext<ModalContext>(defaultContext);
const { Provider } = modalContext;

/**
 * Provider that does the work of managing search results
 * @param children
 */
const ModalProvider: React.FC = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [bookInfo, setBookInfo] = useState<Book>();

    return (
        <Provider
            value={{
                isModalOpen,
                setIsModalOpen,
                bookInfo,
                setBookInfo,
            }}
        >
            {children}
        </Provider>
    );
};

export default ModalProvider;
