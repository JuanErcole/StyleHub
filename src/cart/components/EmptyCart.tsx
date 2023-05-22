import { Box, Grid, Typography } from "@mui/material"



export const EmptyCart = () => {



  return (
    <Grid
      my={2}
      display='flex'
      flexDirection='column'
      justifyContent='center'
      sx={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1619191163420-4a7c0798b8a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)',
        height: '400px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPositionY: '20%',
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
        <Typography variant="h3">
          No hay productos en el carrito
        </Typography>
      </Box>
    </Grid>
  )
}









