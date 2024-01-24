import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Book } from '../../types/types';

export interface BookCardProps {
    currentBook: Book;
}

const BookCard: React.FC<BookCardProps> = ({ currentBook }) => {
    return (
        <div className="book-card">
            <Card sx={{ display: 'flex' }} elevation={7}>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={currentBook.coverImg}
                    alt={`${currentBook.title} cover`}
                />
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5" text="wrap">
                            {currentBook.title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {currentBook.author}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {currentBook.pubYear}
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
        </div>
    );
};

export default BookCard;
