import {React, useEffect, useState} from 'react'
import {AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Tooltip, Container, Button, Stack, Avatar, Badge} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import constants from '../constants';

import {NavLink, Outlet} from 'react-router-dom';
import AuthService from '../services/auth.service';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
    const user = localStorage.getItem('username')
    const [color, setColor] = useState('rgba(0,0,0,0.1)');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > constants.scrollAmount){
                setColor('rgba(0,0,0)')
            }
            else{
                setColor('rgba(0,0,0,0.6)')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    function logout(){
        AuthService.logout()
        handleCloseNavMenu()
    }

    return (
        <>
            <AppBar sx={{backgroundColor:color}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <RestaurantMenuIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            }}
                        >
                            Restaurant
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            >
                            <MenuIcon />
                            </IconButton>
                            <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                            >
                                <Stack direction='column-reverse'>
                                    {user ?
                                    (<NavLink to='/'><MenuItem onClick={logout}>Log out</MenuItem></NavLink>) : 
                                    (<NavLink to='/login'><MenuItem onClick={handleCloseNavMenu}>Log in</MenuItem></NavLink>)}

                                    <NavLink><MenuItem onClick={handleCloseNavMenu}>Contact</MenuItem></NavLink>
                                    <NavLink><MenuItem onClick={handleCloseNavMenu}>About</MenuItem></NavLink>
                                    <NavLink to='services'><MenuItem onClick={handleCloseNavMenu}>Services</MenuItem></NavLink>
                                    <NavLink to='menu'><MenuItem onClick={handleCloseNavMenu}>Menu</MenuItem></NavLink>
                                    <NavLink to='/'><MenuItem onClick={handleCloseNavMenu}>Home</MenuItem></NavLink>
                                    <NavLink to='/signup'><MenuItem onClick={handleCloseNavMenu}>Sign Up</MenuItem></NavLink>
                                </Stack>
                            </Menu>
                        </Box>
                        <RestaurantMenuIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            }}
                        >
                            Restaurant
                        </Typography>
                        <Stack direction='row-reverse' spacing={2} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {user ? 
                            (<NavLink to='/'>
                                <Button size='large' onClick={logout} sx={{ my: 2, color:'white', '&:hover': { color: 'warning.main' }, display: 'block' }}>Log out</Button>
                            </NavLink>) : 
                            (<NavLink to='login'>
                                <Button size='large' onClick={handleCloseNavMenu} sx={{ my: 2, color:'white', '&:hover': { color: 'warning.main' }, display: 'block' }}>Log in</Button>
                            </NavLink>)}

                            <NavLink>
                                <Button size='large' onClick={handleCloseNavMenu} sx={{ my: 2, color:'white', '&:hover': { color: 'warning.main' }, display: 'block' }}>Contact</Button>
                            </NavLink>

                            <NavLink>
                                <Button size='large' onClick={handleCloseNavMenu} sx={{ my: 2, color:'white', '&:hover': { color: 'warning.main' }, display: 'block' }}>About Us</Button>
                            </NavLink>

                            <NavLink to='services'>
                                <Button size='large' onClick={handleCloseNavMenu} sx={{ my: 2, color:'white', '&:hover': { color: 'warning.main' }, display: 'block' }}>Services</Button>
                            </NavLink>

                            <NavLink to='menu'>
                                <Button size='large' onClick={handleCloseNavMenu} sx={{ my: 2, color:'white', '&:hover': { color: 'warning.main' }, display: 'block' }}>Menu</Button>
                            </NavLink>

                            <NavLink to='/'>
                                <Button size='large' onClick={handleCloseNavMenu} sx={{ my: 2, color:'white', '&:hover': { color: 'warning.main' }, display: 'block' }}>Home</Button>
                            </NavLink>
                            
                        </Stack>

                        <Box sx={{ flexGrow: 0 }}>
                            <NavLink to='cart'>
                                <Tooltip title="Open Cart">
                                    <IconButton color='warning' sx={{color:'white'}} ml={2}>
                                        <Badge badgeContent={4} color="warning" size="large" edge="start" aria-label="logo" sx={{ml:'4px'}}>
                                            <ShoppingCartIcon color='white'/>                        
                                        </Badge>
                                    </IconButton>
                                </Tooltip>
                            </NavLink>
                            <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                            >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <main>
                <Outlet/>
            </main>
        </>
    );
}
export default ResponsiveAppBar;