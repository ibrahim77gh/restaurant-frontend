import React, { useEffect } from 'react'
import { Stack } from '@mui/material'
import { Hero_Menu, Contact, Products_Menu_1, Qualities, ResponsiveAppBar, Footer } from '../components'
import axios from 'axios'
import { useLoaderData } from 'react-router-dom';
import UserService from '../services/user.service';


async function MenuLoader(){
  try{
    const response1 = await UserService.getProductsFromCollection(1) // Fast Food
    const response2 = await UserService.getProductsFromCollection(2) // BBQ
    const response3 = await UserService.getProductsFromCollection(3) // Desserts
    console.log(response1.data.results)
    const result = {
      collection1:response1.data.products,
      collection2:response2.data.products,
      collection3:response3.data.products
    }
    return result;
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