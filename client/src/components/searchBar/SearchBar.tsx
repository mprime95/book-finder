import React, { useContext } from 'react';
import { TextField, FormControl } from '@mui/material';
import { bookSearchContext } from '../contexts/bookSearchContext';
import { Container } from '@mui/material';

/**
 * Component to display search bar and retrieve user input
 */
const SearchBar = () => {
    const { searchTerm, setSearchTerm } = useContext(bookSearchContext);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        <input type="text" placeholder="Search here" onChange={handleChange} value={searchTerm} />;
    };

    return (
        <div className="pt-8">
            <Container>
                <FormControl fullWidth sx={{ m: 1 }}>
                    <TextField id="search-bar" variant="outlined" onChange={handleChange} value={searchTerm} sx={{ bgcolor: 'white'}}/>
                </FormControl>
            </Container>
        </div>
    );
};

export default SearchBar;
