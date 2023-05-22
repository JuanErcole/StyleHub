import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { CardItem } from '../../components/CardItem';
import { Box, Grid } from '@mui/material';
import { useProductStore } from '../../hooks/useProductStore';
import { useEffect } from 'react';


// const OFFERS_LIST = [
//   {
//     id: 1,
//     title: 'Offer 1',
//     description: 'Offer 1 description',
//     price: 100,
//     image: 'https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
//     isOffer: true,
//   },
//   {
//     id: 2,
//     title: 'Offer 2',
//     description: 'Offer 2 description',
//     price: 200,
//     image: 'https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
//     isOffer: true,
//   },
//   {
//     id: 3,
//     title: 'Offer 3',
//     description: 'Offer 3 description',
//     price: 300,
//     image: 'https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
//     isOffer: true,
//   },
//   {
//     id: 4,
//     title: 'Offer 4',
//     description: 'Offer 4 description',
//     price: 400,
//     image: 'https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
//     isOffer: true,
//   },
//   {
//     id: 5,
//     title: 'Offer 5',
//     description: 'Offer 5 description',
//     price: 500,
//     image: 'https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
//     isOffer: true,
//   },
//   {
//     id: 6,
//     title: 'Offer 6',
//     description: 'Offer 6 description',
//     price: 600,
//     image: 'https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
//     isOffer: true,
//   }
// ]

// const firstFive = OFFERS_LIST.slice(0, 5);

export const Offers = () => {
 
  const { products, startLoadingProductsInOffer } = useProductStore();
 
  const firstThree = products.slice(0, 3);

  useEffect(() => {
    startLoadingProductsInOffer();
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
              id={item.id} 
              title={item.name} 
              description={item.description}
              price={item.price}
              image='https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
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
          endIcon={<ArrowForwardIcon />}
        >
          Ver Mas
        </Button>
      </Grid>
    </Box>
  )
}
