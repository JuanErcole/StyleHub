import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Stack from '@mui/material/Stack';
import { Divider } from '@mui/material';



export const Footer = () => {
  return (
    <footer className={"footer"}>
      <Grid item xs={12} bgcolor='primary'>
        <nav className={"nav--footer"}>
          <Typography variant='h3' color='#ffff'>
            StyleHub
          </Typography>
          <Typography variant='h6' color='#ffff'>
            No olvides de seguiernos en nuestras redes sociales
          </Typography>
          <Stack 
            direction="row" 
            spacing={2}
            justifyContent='center'
            color='#ffff'
          >
            <FacebookIcon fontSize='large' />
            <InstagramIcon fontSize='large' />
            <TwitterIcon fontSize='large' />
          </Stack>
          <Divider sx={{ backgroundColor: '#ffff' }} />
          <h4 className='footer__legend'>
            Toysland Argentina S.A | Domicilio Legal Av. siempre viva 742, C2033ZXA CBA / Domicilio Comercial Calle falsa 123, B3348BFP, Springfield, CUIT 20-39495267-9 | EMAIL: toysland.SAR@am.toysland.com | TELÉFONO: 0800194217669 (Ventas: Opción 1, Atención al Cliente: Opción 2)
          </h4>
        </nav>
      </Grid>
    </footer>
  )
}



