import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from "@mui/material";
import { CatchingPokemon } from "@mui/icons-material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect, useState } from "react";
import constants from '../constants'


const Navbar = () => {
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

    return (
        <div>
            <AppBar sx={{backgroundColor:color}}>
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="logo">
                        <CatchingPokemon/>
                    </IconButton>
                    <Typography variant="h6" component="div">
                        Restaurant
                    </Typography>
                    <Stack direction='row-reverse' spacing={2} flexGrow={1}>
                        <IconButton size="large" edge="start" color="inherit" aria-label="logo" sx={{ml:'5px'}}>
                            <ShoppingCartIcon/>
                        </IconButton>
                        <Button color="inherit">Contact</Button>
                        <Button color="inherit">About</Button>
                        <Button color="inherit">Services</Button>
                        <Button color="inherit">Menu</Button>
                        <Button color="inherit">Home</Button>
                    </Stack>
                </Toolbar>
            </AppBar>
        </div>
        )
}

export default Navbar