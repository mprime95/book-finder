import React, {useContext} from 'react';
import {Paper, Table, TableContainer, TableCell, TableBody , TableHead, TableRow} from '@mui/material';
import { bookSearchContext } from '../contexts/bookSearchContext';
import useBookResults from '../hooks/useBookResults';

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
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Author</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!data ? (
          <>
          loading
          </>) :data.map((row) => (
            <TableRow
              key={row.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.author}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

export default BookList;