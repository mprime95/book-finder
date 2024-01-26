import React from 'react';
import './App.css';
import HomePage from '../pages/HomePage';
import ModalProvider from '../contexts/modalContext';

/**
 * Root of the application. Contains global application-level providers not specific to app functionality,
 * and the entry point
 */
const App: React.FC = () => {
    return (
        <>
            <ModalProvider>
                <HomePage />
            </ModalProvider>
        </>
    );
};

export default App;
