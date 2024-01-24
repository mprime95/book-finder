import express from 'express';
import cors from 'cors';
import books from '../mockData/books.json';

const app = express();

app.get("/books", cors(), (req, res, next) => {
    res.json(books.books);
   });

app.listen(8080, () => {
    console.log('Server running on http://localhost:8080/');
  });