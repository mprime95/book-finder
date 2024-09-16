import React, { useContext } from 'react';
import BookSearchProvider from '../contexts/bookSearchContext';
import SearchBar from '../searchBar/SearchBar';
import BookList from '../bookList/BookList';
import { modalContext } from '../contexts/modalContext';
import BookInfoModal from '../bookList/BookInfoModal';

/**
 * Home/ search page of Book Finder app
 * displays the search bar and search results, or, if search is empty, lists all books
 */
const HomePage: React.FC = () => {
    const { isModalOpen, setIsModalOpen, bookInfo } = useContext(modalContext);

    const handleClose = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="home-page-section container dark:bg-slate-800">
            <BookSearchProvider>
                <div className="search-bar container">
                    <SearchBar />
                </div>
                <div className="results-section container">
                    <BookList />
                </div>
                <BookInfoModal open={isModalOpen} handleClose={handleClose} book={bookInfo} />
            </BookSearchProvider>
        </div>
    );
};

export default HomePage;
