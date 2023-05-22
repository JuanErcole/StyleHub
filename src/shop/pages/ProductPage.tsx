import { Divider, Grid } from "@mui/material"
import Typography from '@mui/material/Typography';
import { useProductStore } from "../../hooks/useProductStore";
import { useEffect } from "react";
import { CardItem } from "../../components/CardItem";



export const ProductPage = () => {
  
  const { products, startLoadingProducts } = useProductStore();
  
  useEffect(() => {
    startLoadingProducts();
  }, [])
  

  return (
    <Grid>
      <Grid 
        item 
        xs={12}
        textAlign='center'
      >
        <Typography  
          variant='h2'
          color='secondary'
          fontWeight={700}
        >
          Todos nuestros productos
        </Typography>
      </Grid>
      <Divider />
      <Grid 
        item
        my={5}
        display='flex'
        justifyContent='space-around'
        flexWrap='wrap'
        gap='20px'
        xs={12}
      >
        {
          products.map((product) => (
            <CardItem
              key={product.id}
              id={product.id}
              title={product.name}
              description={product.description}
              price={product.price}
              image='https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
              isOffer={product.is_offer}
            />
          ))
        }
      </Grid>
    </Grid>
  )
}
