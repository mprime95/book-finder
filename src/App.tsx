import React from 'react';
import './App.css';
import HomePage from './components/pages/HomePage';

/**
 * Root of the application. Contains global application-level providers not specific to app functionality,
 * and the entry point 
 */
const App: React.FC = () => {
    return (
        <>
            <HomePage />
        </>
    );
};

export default App;
