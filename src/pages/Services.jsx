import React from 'react'
import { Stack } from '@mui/material'
import { Hero_Menu, Contact, Qualities, Footer } from '../components'

const Services = () => {
  return (
    <Stack>
        <Hero_Menu t='OUR SERVICES' b='SERVICES'/>
        <Contact/>
        <Qualities/>
        <Footer/>
    </Stack>
  )
}

export default Services