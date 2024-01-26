import React, { createContext, useState } from 'react';
import { Book } from '../../types/types';

export interface FavBookContext {
    favourites: Book[];
    setFavourites: (x: Book[]) => void;
}

const defaultContext: FavBookContext = {
    favourites: [],
    setFavourites: () => {},
};

export const favBookContext = createContext<FavBookContext>(defaultContext);
const { Provider } = favBookContext;

/**
 * Provider that does the work of managing and storing a user's favourite books
 * @param children
 */
const FavBookProvider: React.FC = ({ children }) => {
    const [favourites, setFavourites] = useState<Book[]>([]);

    return (
        <Provider
            value={{
                favourites,
                setFavourites,
            }}
        >
            {children}
        </Provider>
    );
};

export default FavBookProvider;
