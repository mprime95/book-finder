import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { AppBar, Box, Button, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { useHistory } from 'react-router-dom';
import ROUTES from '../app/constants/routes';
import DarkModeToggle from './DarkModeToggle';
import SearchBar from '../searchBar/SearchBar';
import { MenuList } from '@mui/material';

/**
 * Component to display global page header and navbar
 */
const Header: React.FC = () => {
    const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const history = useHistory();
    const pages = [
        {
            name: 'Home',
            link: '/',
        },
    ];

    useEffect(() => {
        console.log('user: ', user);
    }, [user]);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="header-section">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" className="bg-indigo-500">
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
                        {!!user ? (
                            <div>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    anchorEl={anchorEl}
                                    id="account-menu"
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                    MenuListProps={{ sx: { py: 0 } }}
                                >
                                    <MenuItem
                                        onClick={() => {
                                            history.push(ROUTES.favourites);
                                        }}
                                        className="bg-indigo-200 dark:bg-deep-purple-900 dark:text-white hover:bg-indigo-400 hover:text-white"
                                    >
                                        Favourites
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => {}}
                                        className="bg-indigo-200 dark:bg-deep-purple-900 dark:text-white hover:bg-indigo-400 hover:text-white"
                                    >
                                        <DarkModeToggle />
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                                        className="bg-indigo-200 dark:bg-deep-purple-900 dark:text-white hover:bg-indigo-400 hover:text-white"
                                    >
                                        Log Out
                                    </MenuItem>
                                </Menu>
                            </div>
                        ) : (
                            <Button color="inherit" onClick={() => loginWithRedirect()}>
                                <Typography varient="subtitle1" component="div" sx={{ flexGrow: 1 }}>
                                    Login
                                </Typography>
                            </Button>
                        )}
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default Header;
