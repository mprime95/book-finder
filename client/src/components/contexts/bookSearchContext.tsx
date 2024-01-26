import React, { createContext, useState } from 'react';

export interface BookSearchContext {
    searchTerm: string;
    setSearchTerm: (x: string) => void;
}

const defaultContext: BookSearchContext = {
    searchTerm: '',
    setSearchTerm: () => {},
};

export const bookSearchContext = createContext<BookSearchContext>(defaultContext);
const { Provider } = bookSearchContext;

/**
 * Provider that does the work of managing search results
 * @param children
 */
const BookSearchProvider: React.FC = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    return (
        <Provider
            value={{
                searchTerm,
                setSearchTerm,
            }}
        >
            {children}
        </Provider>
    );
};

export default BookSearchProvider;
