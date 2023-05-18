import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


export const Hero = () => {

  return (
    <Grid 
      item 
      xs={12}
      display='flex'
      justifyContent='center'
      alignItems='center'
      sx={{ 
        backgroundImage: 'url(https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80)', 
        height: '400px', 
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover',
        opacity: '0.8',
        filter: 'grayscale(50%)',
      }}
    >
      <Box
        width='100%'
        bgcolor='rgba(0,0,0,0.8)'
        color='white'
        textAlign='center'
      >
        <Typography variant='h2'>
          StyleHub
        </Typography>
      </Box>
    </Grid>

  )
}









