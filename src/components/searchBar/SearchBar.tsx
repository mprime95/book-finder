import React, {useContext} from 'react';
import { bookSearchContext } from '../contexts/bookSearchContext';

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
            <input type='search' onChange={handleChange} value={searchTerm} />
        </div>
    )
}

export default SearchBar;