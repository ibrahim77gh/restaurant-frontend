import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Stack, Typography, Tabs, Tab} from '@mui/material';
import { burger, tikka, rice, juices, soda, shakes, cinnamon, cake, pudding } from '../assets';
import constants from '../constants';
import {TabPanel, a11yProps, FoodItem} from './Functions_Products';


TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const Products = () => {
    const [value, setValue] = useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    <Stack width='100vw' height='1200px' bgcolor='rgb(18,18,18)' justifyContent='center' alignItems='center' spacing={10}>
        <Stack alignItems='center'>
            <Typography variant='h2' color='warning.main'>Discover</Typography>
            <Typography variant='h2'>Our Products</Typography>
        </Stack>
        <Typography variant='h5' width={1000} align='center'>
            {constants.productText}
        </Typography>
        <Stack sx={{ width: '100%' }} alignItems='center'>
            <Stack sx={{ borderBottom: 1, borderColor: 'warning.main' }} alignItems='center' direction='row'>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor='white' TabIndicatorProps={{style: {backgroundColor: "white"}}}>
                    <Tab label="Main Dish" {...a11yProps(0)}/>
                    <Tab label="Drinks" {...a11yProps(1)} />
                    <Tab label="Dessert" {...a11yProps(2)} />
                </Tabs>
            </Stack>
            <TabPanel value={value} index={0} >
                <Stack direction='row' justifyContent='space-between' spacing={5}>
                    <FoodItem title='Fried Rice' image={rice}/>
                    <FoodItem title='Chicken Tikka' image={tikka}/>
                    <FoodItem title='Cheese Burger' image={burger}/>
                </Stack>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Stack direction='row' justifyContent='space-between' spacing={5}>
                    <FoodItem title='Juices' image={juices}/>
                    <FoodItem title='Shakes' image={shakes}/>
                    <FoodItem title='Soda' image={soda}/>
                </Stack>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Stack direction='row' justifyContent='space-between' spacing={5}>
                    <FoodItem title='Pudding' image={pudding}/>
                    <FoodItem title='Blueberry Cake' image={cake}/>
                    <FoodItem title='Cinnamon Roll' image={cinnamon}/>
                </Stack>
            </TabPanel>
        </Stack>
    </Stack>
  )
}

export default Products