import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Stack, Typography, Tabs, Tab} from '@mui/material';
import { burger, tikka, rice, juices, soda, shakes, cinnamon, cake, pudding } from '../assets';
import constants from '../constants';
import {TabPanel, a11yProps, FoodItem} from './Functions_Products';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

theme.typography.h2 = {
    fontSize: '2.5rem',
    '@media (min-width:600px)': {
        fontSize: '2.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '4rem',
    },
};

theme.typography.h5 = {
    fontSize: '1rem',
    '@media (min-width:600px)': {
        fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.5rem',
    },
};


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
    <Stack width='100vw' py={5} bgcolor='rgb(18,18,18)' justifyContent='center' alignItems='center' spacing={10}>
        <Stack alignItems='center'>
            <ThemeProvider theme={theme}>
                <Typography variant='h2' color='warning.main'>Discover</Typography>
                <Typography variant='h2'>Our Products</Typography>
                <Typography variant='h5' width={{sm:500, md:800}} align='center' mt={3}>
                    {constants.productText}
                </Typography>
            </ThemeProvider>
        </Stack>
        <Stack sx={{ width: '100%' }} alignItems='center'>
            <Stack sx={{ borderBottom: 1, borderColor: 'warning.main' }} alignItems='center' direction='row'>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor='white' TabIndicatorProps={{style: {backgroundColor: "white"}}}>
                    <Tab label="Main Dish" {...a11yProps(0)}/>
                    <Tab label="Drinks" {...a11yProps(1)} />
                    <Tab label="Dessert" {...a11yProps(2)} />
                </Tabs>
            </Stack>
            <TabPanel value={value} index={0} >
                <Stack direction={{ sm: 'column', md: 'row' }} justifyContent='space-between' spacing={5}>
                    <FoodItem title='Fried Rice' image={rice}/>
                    <FoodItem title='Chicken Tikka' image={tikka}/>
                    <FoodItem title='Cheese Burger' image={burger}/>
                </Stack>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Stack direction={{ sm: 'column', md: 'row' }} justifyContent='space-between' spacing={5}>
                    <FoodItem title='Juices' image={juices}/>
                    <FoodItem title='Shakes' image={shakes}/>
                    <FoodItem title='Soda' image={soda}/>
                </Stack>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Stack direction={{ sm: 'column', md: 'row' }} justifyContent='space-between' spacing={5}>
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