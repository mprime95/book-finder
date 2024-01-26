import express from 'express';
import cors from 'cors';
import books from '../mockData/books.json';

// Initialise API
const app = express();
app.listen(8080, () => {
  console.log('Server running on http://localhost:8080/');
});

/**
 * /book endpoint to return all books that contain the search string within its title,
 * author, or series
 */
app.get("/books", cors(), (req, res) => {
    try {
      console.log(req.query);
      let response = [];
      if(req.query.search !== undefined) {
        response = books.books.filter((item) => {
          if (item.title.toLowerCase().includes(req.query.search as string)){
            return item;
        } else if (item.author.toLowerCase().includes(req.query.search as string)){
          return item;
        } else if (item.series.toLowerCase().includes(req.query.search as string)){
          return item;
        }});
      } else {
        response = books.books;
      }
      res.json(response);
    } catch (e) {
      res.status(500)
    }
   });

