import React from 'react'
import {Stack, Typography, Card, CardContent, Link} from '@mui/material'
import constants from '../constants'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function ContactDetails(prop){
    return(
        <Card sx={{ minWidth: 275, bgcolor: 'inherit' }} variant='outlined'>
            <CardContent sx={{color:'white'}}>
                <Stack direction='row' spacing={3}>
                    {prop.icon}
                    <Typography>{prop.text}</Typography>                        
                </Stack>
            </CardContent>
        </Card>
    )
}

const Footer = () => {
  return (
    <Stack width='100vw' py={5} bgcolor='rgb(0,0,0)' justifyContent='space-evenly' direction={{ sm: 'column', md: 'row' }} paddingTop={5} alignItems='center'>
        <Stack width={150} alignItems='center' spacing={3}>
            <Typography variant='h5' color='white'>About Us</Typography>
            <Typography>{constants.productText}</Typography>
        </Stack>
        <Stack width={150} alignItems='center' my={5} spacing={3}>
            <Typography variant='h5' color='white'>Contact Us</Typography>
            <ContactDetails icon={<CallIcon/>} text={'+92 3171141568'}/>
            <ContactDetails icon={<EmailIcon/>} text={'203 Fake St. Mountain View, San Francisco, California, USA'}/>
            <ContactDetails icon={<LocationOnIcon/>} text={'info@yourdomain.com'}/>
        </Stack>
        <Stack width={150} alignItems='center' my={5} spacing={3}>
            <Typography variant='h5' color='white'>Services</Typography>
            <Typography color='grey'>Fastest Delivery</Typography>
            <Typography color='grey'>Easy to Order</Typography>
            <Typography color='grey'>Greate Taste</Typography>
            <Typography color='grey'>No Compromise</Typography>
        </Stack>
        <Stack width={150} alignItems='center' spacing={3}>
            <Typography variant='h5' color='white'>Social Media</Typography>
            <Link href="#"><FacebookIcon/></Link>
            <Link href="#"><LinkedInIcon/></Link>
            <Link href="#"><TwitterIcon/></Link>
            <Link href="#"><InstagramIcon/></Link>
        </Stack>
    </Stack>
  )
}

export default Footer