import React, {useContext, useEffect, useState} from 'react';
import { bookSearchContext } from '../contexts/bookSearchContext';

/**
 * Sets the results of the user's search term to be displayed by BookList
 */
const useBookResults = () => {
    const { searchTerm } = useContext(bookSearchContext);
    const [results, setResults] = useState([]);

    return {
        results
    }
}

export default useBookResults;