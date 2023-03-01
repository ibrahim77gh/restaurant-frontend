import React, {useState} from 'react'
import { Typography, Box, Card, CardActions, CardContent, CardMedia, Button } from '@mui/material'
import constants from '../constants'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  
function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
function FoodItem(item){
    return (
        <Card sx={{ maxWidth: 400, bgcolor: 'inherit' }} variant='outlined'>
          <CardMedia
            sx={{ height: 300}}
            image={item.image}
            title={item.title}
          />
          <CardContent alignItems='center' sx={{color:'white'}}>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {constants.productText}
            </Typography>
            <Typography variant='h5' >
                $2.90
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large" sx={{color:'warning.main'}}>Add to Cart</Button>
          </CardActions>
        </Card>
      );
}

export {
    TabPanel, a11yProps, FoodItem
}