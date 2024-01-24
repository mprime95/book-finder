import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Book } from '../../types/types';

/**
 * Hook to handle API calls
 * @param endpoint
 */
const useApi = (endpoint: string) => {
    const [data, setData] = useState<Book[] | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const BASE_URL = 'http://localhost:8080/';

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response: AxiosResponse<Book[]> = await axios.get(`${BASE_URL}${endpoint}`);
                setData(response.data);
                setLoading(false);
            } catch (error) {
                setError('Error getting the data');
                setLoading(false);
            }
        };

        fetchData();
    }, [endpoint]);

    return {
        data,
        loading,
        error,
    };
};

export default useApi;
