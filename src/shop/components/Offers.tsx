import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { CardItem } from '../../components/CardItem';
import { Box, Grid } from '@mui/material';
import { useProductStore } from '../../hooks/useProductStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export const Offers = () => {

  const navigate = useNavigate();
 
  const { products, loadingProductsInOffer } = useProductStore();
 
  const firstThree = products.slice(0, 3);
  

  useEffect(() => {
    loadingProductsInOffer();
  }, [])
  
 
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='space-around'
      paddingX='20px'
    >
      <Box
        display='flex'
        flexWrap='wrap'
        gap='20px'
        justifyContent='space-around'
      >
        {
          firstThree.map( item => (
            <CardItem
              key={item.id}
              id={item.id ? item.id : 0} //! TODO: preguntar a Gero 
              title={item.name} 
              description={item.description}
              price={item.price}
              image={item.imgUrl}
              isOffer={item.is_offer}
            />
          ))
        }
      </Box>
      <Grid 
        mt='20px'
        item xs={12} 
        display='flex' 
        justifyContent='end'
      >
        <Button 
          variant="contained" 
          onClick={() => navigate('/offers')}
          endIcon={<ArrowForwardIcon />}
        >
          Ver Mas
        </Button>
      </Grid>
    </Box>
  )
}
