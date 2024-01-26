import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

/**
 * Component to display global page header and navbar
 */
const Header: React.FC = () => {
    const pages = [
        {
            name: 'Home',
            link: '/dashboard',
        },
        {
            name: 'Favourites',
            link: '/favourites',
        },
    ];

    return (
        <div className="header-section">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Book Finder
                        </Typography>
                        {pages.map((page) => (
                            <Button key={page.name} href={page.link} color="inherit">
                                <Typography varient="subtitle1" component="div" sx={{ flexGrow: 1 }}>
                                    {page.name}
                                </Typography>
                            </Button>
                        ))}
                        <Button color="inherit">
                            <Typography varient="subtitle1" component="div" sx={{ flexGrow: 1 }}>
                                Login
                            </Typography>
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default Header;
