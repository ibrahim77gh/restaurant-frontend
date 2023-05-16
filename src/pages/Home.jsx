import React, { useEffect, useState } from 'react'
import {Stack} from '@mui/material';
import { Hero, Contact, Qualities, Products, Testimonials, Footer } from '../components'
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const products = useLoaderData()
  // const [products, setProducts] = useState(null)

  // async function getData(){
  //   try{
  //     const response1 = await UserService.getProductsFromCollection(1) // Fast Food
  //     const response2 = await UserService.getProductsFromCollection(2) // BBQ
  //     const response3 = await UserService.getProductsFromCollection(3) // Desserts
  //     console.log(response1.data.results)
  //     const result = {
  //       collection1:response1.data.products,
  //       collection2:response2.data.products,
  //       collection3:response3.data.products
  //     }
  //     setProducts(result);
  //   }
  //   catch (error) {
  //     return error
  //   }  
  // }

  // useEffect(() => {
  //   getData()
  // }, [])

  return (
    <Stack>
        <Hero/>
        <Contact/>
        <Qualities/>
        {products === null ? (
          // Render a loading indicator or placeholder while data is being fetched
          <div>Loading...</div>
        ) : (
          // Render the Products component once data is available
          <Products products={products} />
        )}
        <Testimonials/>
        <Footer/>
    </Stack>
  )
}

export default Home