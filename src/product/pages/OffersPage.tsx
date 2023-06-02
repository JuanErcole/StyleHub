import { useEffect } from "react";
import { useProductStore } from "../../hooks/useProductStore";
import { Divider, Grid, Typography } from "@mui/material";
import { CardItem } from "../../components/CardItem";


export const OffersPage = () => {

  const { products, loadingProductsInOffer } = useProductStore();

  useEffect(() => {
    loadingProductsInOffer();
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
          Productos en oferta
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
