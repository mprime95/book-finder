import React from 'react';

interface Book {
    title: string;
    author: string;
    pubYear: number;
    series: string;
    coverImg: string
}

const BookCard = (currentBook: Book) => {

    console.log(currentBook);
    return (
        <></>
    )

}

export default BookCard;