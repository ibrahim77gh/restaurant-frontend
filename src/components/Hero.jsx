import React, { useState, useEffect, } from 'react'
import { Box, Slide, Typography, Stack, Button } from '@mui/material'
import {img1, img2, img3, img4, img5, img6} from '../assets/'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import '../App.css'


const theme = createTheme();

theme.typography.h2 = {
  fontSize: '2.5rem',
  '@media (min-width:600px)': {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '4rem',
  },
};

theme.typography.h4 = {
  fontSize: '1.5rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
  },
};

const Hero = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 6000);
    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
  <Box width='100vw' height='800px' bgcolor='rgba(0,0,0,0.5)' >
    <Slide direction="left" in={true} mountOnEnter unmountOnExit timeout={500}>
      <img src={images[currentImageIndex]} alt="" style={{width:'100%', height:'inherit', objectFit:'cover', position:'absolute', zIndex:'-10'}} />
    </Slide>
    <Stack justifyContent='center' alignItems='center' height='100%' spacing={3}>
      <ThemeProvider theme={theme}>
        <Typography variant='h4' color='warning.main' >Welcome</Typography>
        <Typography variant='h2' alignContent='center'>AMAZING TASTE</Typography>
        <Typography variant='h2' alignContent='center'>BEAUTIFUL PLACE</Typography>
      </ThemeProvider>
      <Stack direction='row' spacing={2}>
        <Button variant='contained' size='large' color='warning'> Book Table</Button>
        <NavLink to='menu'>
          <Button variant='contained' size='large' color='warning'> View Menu </Button>
        </NavLink>
      </Stack>
    </Stack>
  </Box>
  )
}

export default Hero