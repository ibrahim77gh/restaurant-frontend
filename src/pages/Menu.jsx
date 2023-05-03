import React, { useEffect } from 'react'
import { Stack } from '@mui/material'
import { Hero_Menu, Contact, Products_Menu_1, Qualities, ResponsiveAppBar, Footer } from '../components'
import axios from 'axios'
import { useLoaderData } from 'react-router-dom';
import UserService from '../services/user.service';


async function MenuLoader(){
  try{
    const response = await UserService.getProducts()
    console.log(response.data.results)
    return response.data.results
  }
  catch (error) {
    return error
  }  
} 


const Menu = () => {
  
  const products = useLoaderData()

  return (
    <Stack>
        <Hero_Menu t='OUR MENU' b='MENU'/>
        <Contact/>
        <Qualities/>
        <Products_Menu_1 products={products}/>
        <Footer/>
    </Stack>
  )
}

export {Menu, MenuLoader}