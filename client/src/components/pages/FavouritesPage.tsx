import React, { useContext } from 'react';
import BookList from '../bookList/BookList';
import BookInfoModal from '../bookList/BookInfoModal';
import { modalContext } from '../contexts/modalContext';
import { Typography } from '@mui/material';

const FavouritesPage: React.FC = () => {
    const { isModalOpen, setIsModalOpen, bookInfo } = useContext(modalContext);

    const handleClose = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Typography component="div" variant="h3" text="wrap">
                Your Favourites
            </Typography>
            <BookList favouritesOnly={true} />
            <BookInfoModal open={isModalOpen} handleClose={handleClose} book={bookInfo} />
        </>
    );
};

export default FavouritesPage;
