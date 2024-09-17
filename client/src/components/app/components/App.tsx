import React from 'react';
import { StyledEngineProvider } from '@mui/material';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import ModalProvider from '../../contexts/modalContext';
import FavBookProvider from '../../contexts/favBookContext';
import FavouritesPage from '../../pages/FavouritesPage';
import ROUTES from '../constants/routes';
import Header from '../../header/Header';

/**
 * Root of the application. Contains global application-level providers not specific to app functionality,
 * and the entry point
 */
const App: React.FC = () => {
    return (
        <StyledEngineProvider injectFirst>
            <div className="dark:bg-blue-gray-900 overflow-auto">
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
            </div>
        </StyledEngineProvider>
    );
};

export default App;
