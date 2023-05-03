import React, {useEffect, useState} from 'react'
import { Typography, Box, Card, CardActions, CardContent, CardMedia, Button } from '@mui/material'
// import constants from '../constants'
import UserService from '../services/user.service';

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
  const [id, setId] = useState(null)
  
  useEffect(() => {
    setId(item.id)
  }, [item])

  async function handleClick(){
    try{
      const response = await UserService.addToCart(id)
      console.log(response.data)
    }catch(e){
        throw e
    }
  }

    return (
        <Card sx={{ bgcolor: 'warning.main' }} variant='outlined'>
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
              {item.description}
            </Typography>
            <Typography variant='h5' >
                {item.unit_price}
            </Typography>
          </CardContent>
          <CardActions onClick={() => handleClick()}>
            <Button size="large" variant='contained' sx={{ color: 'warning.main', backgroundColor:'black' }}>Add to Cart</Button>
          </CardActions>
        </Card>
      );
}

export {
    TabPanel, a11yProps, FoodItem
}