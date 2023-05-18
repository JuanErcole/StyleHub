import Grid from '@mui/material/Grid'
import { Hero } from '../components/Hero';
import { OnSale } from '../components/OnSale';
import { Reviews } from '../components/Reviews';
import { Footer } from '../../components/Footer';



export const HomePage = () => {
  return (

    <Grid >

      <Hero />

      <OnSale />

      <Grid item xs={12}>
        <Reviews /> 
      </Grid>
      <Footer />
    </Grid>

  )
}
