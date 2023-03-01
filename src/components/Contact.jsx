import { Stack, Card, Typography, CardContent, CardActions,  Button } from '@mui/material'
import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Contact = () => {
  return (
    <Stack bgcolor='rgb(0,0,0)' direction={{ sm: 'column', md: 'row' }} justifyContent='space-evenly' paddingY={4} alignItems='center'>
        <Card sx={{ minWidth: 275, bgcolor: 'inherit' }} variant='outlined'>
            <CardContent sx={{color:'white'}}>
                <Stack direction='row' spacing={3}>
                    <CallIcon sx={{color: 'warning.main'}}/>
                    <Stack spacing={2}>
                        <Typography variant='h6'>+92 3171141568</Typography>
                        <Typography variant='h6' width={200}>
                            One of the best restaurants with 5-star rating giving special services
                        </Typography>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
        <Card sx={{ minWidth: 275, bgcolor: 'inherit' }} variant='outlined'>
            <CardContent sx={{color:'white'}}>
                <Stack direction='row' spacing={3}>
                    <LocationOnIcon sx={{color: 'warning.main'}}/>
                    <Stack spacing={2}>
                        <Typography variant='h6'>Gulshan East 14th Street</Typography>
                        <Typography variant='h6' width={200}>
                            203 Fake St. Mountain View, San Francisco, California, USA
                        </Typography>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
        <Card sx={{ minWidth: 275, bgcolor: 'inherit' }} variant='outlined'>
            <CardContent sx={{color:'white'}}>
                <Stack direction='row' spacing={3}>
                    <AccessTimeIcon sx={{color: 'warning.main'}}/>
                    <Stack spacing={2}>
                        <Typography variant='h6'>Open Monday-Friday</Typography>
                        <Typography variant='h6' width={200}>
                            12:00pm - 1:00am
                        </Typography>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    </Stack>
  )
}

export default Contact