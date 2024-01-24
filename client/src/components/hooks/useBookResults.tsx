import { useContext } from 'react';
import { bookSearchContext } from '../contexts/bookSearchContext';
import useApi from '../hooks/useApi';

//TODO: Add validation and error handling

/**
 * Sets the results of the user's search term to be displayed by BookList
 */
const useBookResults = () => {
    const { searchTerm } = useContext(bookSearchContext);
    const { data, loading, error } = useApi('books', searchTerm.toLowerCase());

    console.log(data, loading, error);

    return {
        data,
    };
};

export default useBookResults;
