import Grid from '@mui/material/Grid'
import { Hero } from '../components/Hero';
import { OnSale } from '../components/OnSale';
import { Reviews } from '../components/Reviews';




export const HomePage = () => {

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
