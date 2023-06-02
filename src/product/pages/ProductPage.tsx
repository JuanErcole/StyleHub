import { Divider, Grid } from "@mui/material"
import Typography from '@mui/material/Typography';
import { useProductStore } from "../../hooks/useProductStore";
import { useEffect } from "react";
import { CardItem } from "../../components/CardItem";



export const ProductPage = () => {
  
  const { products, loadingProducts } = useProductStore();
  
  useEffect(() => {
    loadingProducts();
  }, [])
  

  return (
    <Grid>
      <Grid 
        item 
        xs={12}
        textAlign='center'
      >
        <Typography
          py={4}  
          variant='h3'
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
              image={product.imgUrl}
              isOffer={product.is_offer}
            />
          ))
        }
      </Grid>
    </Grid>
  )
}
