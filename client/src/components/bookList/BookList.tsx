import React, { useContext } from 'react';
import { Container, Grid } from '@mui/material';
import { bookSearchContext } from '../contexts/bookSearchContext';
import useBookResults from '../hooks/useBookResults';
import BookCard from './BookCard';
import { Book } from '../../types/types';
import { favBookContext } from '../contexts/favBookContext';

interface BookListProps {
    favouritesOnly?: boolean;
}

/**
 * Component to display the list of books matching the user's current search term
 */
const BookList: React.FC<BookListProps> = ({ favouritesOnly = false }) => {
    const { searchTerm } = useContext(bookSearchContext);
    const { favourites } = useContext(favBookContext);
    const { data } = useBookResults();

    const toDisplay: Book[] = favouritesOnly ? favourites : data;

    console.log(favourites);

    //TODO: remove log
    console.log(searchTerm);

    return (
        <div className="book-list-section">
            <Container maxWidth="xl">
                <Grid container md={12} flexDirection="row" spacing={3}>
                    {!data ? (
                        <>loading</>
                    ) : (
                        toDisplay.map((entry) => (
                            <Grid item sm={4}>
                                <BookCard currentBook={entry} />
                            </Grid>
                        ))
                    )}
                </Grid>
            </Container>
        </div>
    );
};

export default BookList;
