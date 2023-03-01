import { Stack, Card, Typography, CardContent, CardActions,  Button } from '@mui/material'
import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import FastfoodIcon from '@mui/icons-material/Fastfood';

const Qualities = () => {
  return (
    <Stack bgcolor='warning.main' direction={{ sm: 'column', md: 'row' }} justifyContent='space-evenly' paddingY={8}>
        <Card sx={{ minWidth: 275, bgcolor: 'inherit' }} variant='outlined' >
            <CardContent sx={{color:'white'}}>
                <Stack spacing={10} alignItems='center' paddingY={5}>
                    <DeliveryDiningIcon sx={{transform: `scale(5)`}}/>
                    <Typography variant='h3'>Fastest Delivery</Typography>
                </Stack>
            </CardContent>
        </Card>
        <Card sx={{ minWidth: 275, bgcolor: 'inherit' }} variant='outlined'>
            <CardContent sx={{color:'white'}}>
                <Stack spacing={10} alignItems='center' paddingY={5}>
                    <BorderColorIcon sx={{transform: `scale(5)`}}/>
                    <Typography variant='h3'>Easy To Order</Typography>
                </Stack>
            </CardContent>
        </Card>
        <Card sx={{ minWidth: 275, bgcolor: 'inherit' }} variant='outlined'>
            <CardContent sx={{color:'white'}}>
                <Stack spacing={10} alignItems='center' paddingY={5}>
                    <FastfoodIcon sx={{transform: `scale(5)`}}/>
                    <Typography variant='h3'>Great Taste</Typography>
                </Stack>
            </CardContent>
        </Card>
    </Stack>
  )
}

export default Qualities