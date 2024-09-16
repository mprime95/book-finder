import React, { useState } from 'react';
import { Switch } from '@mui/material';
import { FormControlLabel } from '@mui/material';

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleChange = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle("dark");
    };

    // Whenever the user explicitly chooses light mode
    localStorage.theme = 'light';

    // Whenever the user explicitly chooses dark mode
    localStorage.theme = 'dark';

    // Whenever the user explicitly chooses to respect the OS preference
    localStorage.removeItem('theme');

    return (
        <>
            <FormControlLabel  label="Dark Mode" control={<Switch checked={isDarkMode} onChange={handleChange} />} />
        </>
    );
};

export default DarkModeToggle;
