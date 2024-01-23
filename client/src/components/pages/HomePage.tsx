import React from 'react';
import BookSearchProvider from '../contexts/bookSearchContext';
import SearchBar from '../searchBar/SearchBar';
import BookList from '../bookList/BookList';

const HomePage: React.FC = () => {

    return (
        <div className="home-page-section container" >
            <BookSearchProvider>
                <div className="search-bar container">
                    <SearchBar />
                </div>
                <div className="results-section container">
                    <BookList />
                </div>
            </BookSearchProvider>
        </div>
    )
}

export default HomePage;