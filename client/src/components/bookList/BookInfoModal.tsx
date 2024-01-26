import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Grid, Modal, Typography } from '@mui/material';
import { Book } from '../../types/types';
import { favBookContext } from '../contexts/favBookContext';

interface BookInfoModalProps {
    open: boolean;
    handleClose: () => void;
    book?: Book;
}

const BookInfoModal: React.FC<BookInfoModalProps> = ({ open, handleClose, book }) => {
    const { favourites, setFavourites } = useContext(favBookContext);
    const [isFavourite, setIsFavourite] = useState<boolean>(false);

    useEffect(() => {
        setIsFavourite(false);
        for (let i = 0; i < favourites.length; i++) {
            if (favourites[i].title === book.title) {
                setIsFavourite(true);
            }
        }

        console.log(isFavourite, favourites);
    }, [isFavourite, book, favourites]);

    const handleClick = () => {
        if (!isFavourite) {
            setFavourites([...favourites, book]);
            setIsFavourite(true);
        } else {
            setFavourites(favourites.filter((fav) => fav.title !== book.title));
            setIsFavourite(false);
        }
    };

    return (
        <>
            {!!open && (
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box
                        sx={{
                            position: 'absolute' as 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 450,
                            bgcolor: 'background.paper',
                            border: '2px solid #000',
                            boxShadow: 24,
                            p: 4,
                            display: 'flexbox',
                            flexDirection: 'row',
                        }}
                    >
                        <Grid container xs={12} spacing={4}>
                            <Grid item xs={6}>
                                <img src={book.coverImg} width={200} height={300} alt={book.title} />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography id="modal-modal-title" variant="h4" component="h2">
                                    {book.title}
                                </Typography>

                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    {book.author}
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Series: {book.series}
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Publication Year: {book.pubYear}
                                </Typography>
                                {!isFavourite ? (
                                    <Button variant="contained" onClick={handleClick}>
                                        Add to favourites
                                    </Button>
                                ) : (
                                    <Button variant="contained" onClick={handleClick}>
                                        Remove from favourites
                                    </Button>
                                )}
                            </Grid>
                        </Grid>
                    </Box>
                </Modal>
            )}
        </>
    );
};

export default BookInfoModal;
