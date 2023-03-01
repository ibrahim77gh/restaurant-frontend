import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Tooltip, Stack, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

function CartItem(item){
    return (
        <Card sx={{ maxWidth: 300, bgcolor: 'black'}} variant='outlined' >
          <CardMedia
            sx={{ height: 200}}
            image={item.image}
            title={item.title}
          />
          <CardContent alignItems='center' sx={{color:'white'}}>
            <Stack direction='row' justifyContent='space-between' spacing={6}>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant='h5' >
                  $2.90
              </Typography>
            </Stack>
            <Stack direction='row' justifyContent='space-between' spacing={6}>
              <TextField
                id="filled-number"
                label="Quantity"
                type="number"
                InputLabelProps={{
                  shrink: true,
                  style: { color: 'white' }
                }}
                variant="filled"
                color="warning"
                InputProps={{
                  style: {
                    color: 'white',
                    borderColor: 'white',
                    borderWidth: '2px',
                    borderStyle: 'solid',
                  }}}
                sx={{width:'8rem'}}
              />
              <Typography variant='h6' >
                  Total: <br /> $15.00
              </Typography>
            </Stack>
          </CardContent>
          <Stack direction='row' justifyContent='space-between'>
            <CardActions>
              <Tooltip title="Delete">
                <IconButton>
                  <DeleteIcon sx={{color:'warning.main'}}/>
                </IconButton>
              </Tooltip>
            </CardActions>
          </Stack>
        </Card>
      );
}

export default CartItem;