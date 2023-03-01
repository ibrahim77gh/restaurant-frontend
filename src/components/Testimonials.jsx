import React from 'react'
import { Stack, Typography, Card, CardContent, Avatar } from '@mui/material'
import {customer, client_1, client_2} from '../assets'
import constants from '../constants'
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

theme.typography.h5 = {
    fontSize: '1rem',
    '@media (min-width:600px)': {
        fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.5rem',
    },
};

function Testimony(person){
    return(
        <Card sx={{ maxWidth: 400, bgcolor: 'rgba(0,0,0,0.7)' }} variant='outlined'>
            <CardContent alignItems='center' sx={{color:'warning.main'}}>
                <Typography gutterBottom component="div" mb={3}>
                {constants.productText}
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Avatar alt={person.name} src={person.image}/>
                    <Stack>
                        <Typography variant='h5'>{person.name}</Typography>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}

const Testimonials = () => {
  return (
    <Stack width='100vw' py={5} bgcolor='rgba(0,0,0,0.6)' justifyContent='center' alignItems='center' spacing={10}>
        <img src={customer} alt="" style={{width:'100%', height:'100%', objectFit:'cover', position:'absolute', zIndex:'-10'}} />
        <Stack alignItems='center'>
            <ThemeProvider theme={theme}>
                <Typography variant='h2' color='warning.main'>Testimony</Typography>
                <Typography variant='h2'>Customer Says</Typography>
                <Typography variant='h5' width={{sm:500, md:800}} align='center' mt={3}>
                    {constants.productText}
                </Typography>
            </ThemeProvider>
        </Stack>
        <Stack direction={{ sm: 'column', md: 'row' }} alignItems='center' justifyContent='space-evenly' width='100%'>
            <Testimony name='Syed Ibrahim' image={client_1}/>
            <Testimony name='Arsalan Ash' image={client_2}/>
            <Testimony name='Syed Ibrahim' image={client_1}/>
            <Testimony name='Arsalan Ash' image={client_2}/>
        </Stack>
    </Stack>
  )
}

export default Testimonials