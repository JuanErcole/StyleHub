import Grid from '@mui/material/Grid'
import { Hero } from '../components/Hero';
import { OnSale } from '../components/OnSale';
import { Reviews } from '../components/Reviews';
import { useCartStore } from '../../hooks/useCartStore';
import { useEffect } from 'react';




export const HomePage = () => {

  const { loadCart } = useCartStore();

  const id = 1;

  useEffect(() => {
    loadCart(id)
  }, [])
  

  return (

    <Grid 
      // sx={{ 
      //   width: { lg: '80%'},
      //   margin: '0 auto',
      // }}
    >
      <Hero />
      <OnSale />

      <Grid item xs={12}>
        <Reviews /> 
      </Grid>
      {/* <Footer /> */}
    </Grid>

  )
}
