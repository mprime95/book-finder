import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import ModalProvider from '../../contexts/modalContext';
import FavBookProvider from '../../contexts/favBookContext';
import FavouritesPage from '../../pages/FavouritesPage';
import './App.css';
import ROUTES from '../constants/routes';
import Header from '../../header/Header';

/**
 * Root of the application. Contains global application-level providers not specific to app functionality,
 * and the entry point
 */
const App: React.FC = () => {
    return (
        <>
            <FavBookProvider>
                <ModalProvider>
                    <BrowserRouter basename="/">
                        <Header />
                        <Switch>
                            <Route path={ROUTES.dashboard}>
                                <HomePage />
                            </Route>
                            <Route path={ROUTES.favourites}>
                                <FavouritesPage />
                            </Route>
                        </Switch>
                    </BrowserRouter>
                </ModalProvider>
            </FavBookProvider>
        </>
    );
};

export default App;
