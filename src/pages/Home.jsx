import React from 'react'
import {Stack} from '@mui/material';
import { Hero, Contact, Qualities, Products, Testimonials, Footer, ResponsiveAppBar } from '../components'

const Home = () => {
  return (
    <Stack>
        <Hero/>
        <Contact/>
        <Qualities/>
        <Products/>
        <Testimonials/>
        <Footer/>
    </Stack>
  )
}

export default Home