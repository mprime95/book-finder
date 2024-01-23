import React, {useEffect} from 'react';

// TODO: remove mock data
import books from '../../mockData/books.json';

const useApi = () => {
    const BASE_URL = "https://openlibrary.org/search";
    return books;
}

export default useApi;