import React, { useContext } from 'react';
import { Container, Grid } from '@mui/material';
import { bookSearchContext } from '../contexts/bookSearchContext';
import useBookResults from '../hooks/useBookResults';
import BookCard from './BookCard';

/**
 * Component to display the list of books matching the user's current search term
 */
const BookList = () => {
    const { searchTerm } = useContext(bookSearchContext);
    const { data } = useBookResults();

    //TODO: remove log
    console.log(searchTerm);

    return (
        <div className="book-list-section">
            <Container maxWidth="xl">
                <Grid container md={12} flexDirection="row" spacing={3}>
                    {!data ? (
                        <>loading</>
                    ) : (
                        data.map((entry) => (
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
