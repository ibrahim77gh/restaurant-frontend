import {Stack} from '@mui/material'
import {React, useEffect, useState} from 'react'
import { Hero_Menu, CartContent, Footer, Total } from '../components'
import UserService from '../services/user.service'
import { useLoaderData, useLocation } from 'react-router-dom'

async function cartLoader(){
  try{
    const response = await UserService.getCart()
    if (typeof response === 'string'){
      return response
    }
    else if (response.data.items.length == 0){
      return "You haven`t added any items in your cart yet"
    }
    else{
      return response.data
    }
  }
  catch (error){
    throw error
  }
}

const Cart_Page = () => {
  const cart = useLoaderData()

  return (
    <Stack>
        <Hero_Menu t='CART' b='CART'/>
        <CartContent cart={cart}/>
        <Footer/>
    </Stack>
  )
}

export {Cart_Page, cartLoader}