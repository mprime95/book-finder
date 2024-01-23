import React, {useContext} from 'react';
import { TextField } from '@mui/material';
import { bookSearchContext } from '../contexts/bookSearchContext';

/**
 * Component to display search bar and retrieve user input
 */
const SearchBar = () => {
    const { searchTerm, setSearchTerm } = useContext(bookSearchContext);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        <input
        type="text"
        placeholder="Search here"
        onChange={handleChange}
        value={searchTerm} />
    }

    return (
        <div className='container'>
            <TextField id="search-bar" variant="outlined" onChange={handleChange} value={searchTerm}/>
        </div>
    )
}

export default SearchBar;