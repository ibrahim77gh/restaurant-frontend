import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { Stack, Typography, Tabs, Tab, Grid} from '@mui/material';
import constants from '../constants';
import {TabPanel, a11yProps, FoodItem} from './Functions_Products';


TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const Products = ({products}) => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    <Stack width='100vw' py={20} bgcolor='rgb(18,18,18)' justifyContent='center' alignItems='center' spacing={10}>
        <Stack alignItems='center'>
            <Typography variant='h2' color='warning.main'>Discover</Typography>
            <Typography variant='h2'>Our Products</Typography>
        </Stack>
        <Typography variant='h5' width='80%' textAlign='center'>
            {constants.productText}
        </Typography>
        <Stack sx={{ width: '100%' }} alignItems='center'>
            <Stack sx={{ borderBottom: 1, borderColor: 'warning.main' }} alignItems='center' direction='row'>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor='white' TabIndicatorProps={{style: {backgroundColor: "white"}}}>
                    <Tab label="Fast Food" {...a11yProps(0)}/>
                    <Tab label="BBQ" {...a11yProps(1)} />
                    <Tab label="Dessert" {...a11yProps(2)} />
                </Tabs>
            </Stack>
            <TabPanel value={value} index={0} >
                <Grid container justifyContent="space-evenly" alignItems="center" spacing={2} pt={5} pb={12} bgcolor='rgb(18,18,18)' rowSpacing={10} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {products.collection1 && products.collection1.map(product => (
                        <Grid item xs={12} sm={6} md={4} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <FoodItem id={product.id} title={product.title} image={product.image} description={product.description} unit_price={product.unit_price}/>
                        </Grid>
                    ))}
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Grid container justifyContent="space-evenly" alignItems="center" spacing={2} pt={5} pb={12} bgcolor='rgb(18,18,18)' rowSpacing={10} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {products.collection2 && products.collection2.map(product => (
                        <Grid item xs={12} sm={6} md={4} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <FoodItem id={product.id} title={product.title} image={product.image} description={product.description} unit_price={product.unit_price}/>
                        </Grid>
                    ))}
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Grid container justifyContent="space-evenly" alignItems="center" spacing={2} pt={5} pb={12} bgcolor='rgb(18,18,18)' rowSpacing={10} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {products.collection3 && products.collection3.map(product => (
                        <Grid item xs={12} sm={6} md={4} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <FoodItem id={product.id} title={product.title} image={product.image} description={product.description} unit_price={product.unit_price}/>
                        </Grid>
                    ))}
                </Grid>
            </TabPanel>
        </Stack>
    </Stack>
  )
}

export default Products