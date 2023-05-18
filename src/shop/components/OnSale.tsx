import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Offers } from './Offers';

export const OnSale = () => {
  return (
    <Grid 
      item xs={12} 
      textAlign='center'
      py='50px'
      bgcolor='#d3e9ff'
    >
      <Typography variant="h2" color='secondary' mb='30px'>
        Productos en oferta
      </Typography>
      <Offers />


    </Grid>
  )
}
