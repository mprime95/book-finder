import React, { useContext } from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Book } from '../../types/types';
import { modalContext } from '../contexts/modalContext';

export interface BookCardProps {
    currentBook: Book;
}

/**
 * Component to display basic book information including cover image, author, title, and publication year
 * @param currentBook
 */
const BookCard: React.FC<BookCardProps> = ({ currentBook }) => {
    const { isModalOpen, setIsModalOpen, setBookInfo } = useContext(modalContext);

    const handleClick = () => {
        setBookInfo(currentBook);
        setIsModalOpen(true);
        console.log(isModalOpen);
    };

    return (
        <div className="book-card">
            <Card sx={{ display: 'flex' }} elevation={7} className=" dark:bg-gray-900">
                <CardActionArea onClick={handleClick}>
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 150, height: 230 }}
                            image={currentBook.coverImg}
                            alt={`${currentBook.title} cover`}
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5" text="wrap" className="dark:text-white">
                                    {currentBook.title}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    color="text.secondary"
                                    component="div"
                                    className="dark:text-gray-400"
                                >
                                    {currentBook.author}
                                </Typography>
                            </CardContent>
                        </Box>
                    </Box>
                </CardActionArea>
            </Card>
        </div>
    );
};

export default BookCard;
