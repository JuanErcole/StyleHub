import { Button, Divider, Grid } from "@mui/material"
import Typography from '@mui/material/Typography';
import { useCartStore } from "../../hooks/useCartStore";
import { EmptyCart } from "../components/EmptyCart";
import { CardItemCart } from "../components/CardItemCart";



export const CartPages = () => {

  const { items } = useCartStore();
  
  const totalAmount = items.reduce((total, item) => total + (item.price * item.quantity), 0);
  console.log(totalAmount);
  

  return (
    <Grid
      display='flex'
      flexDirection='column'
      gap={2}
      my={2}
    >
      <Grid
        item
        xs={12}
        textAlign='center'
      >
        <Typography
          variant="h2"
          color='secondary'
        >
          Mi carrito
        </Typography>
      </Grid>
      <Divider />

      {
        (items.length === 0)
          ? <EmptyCart />
          : items.map(item => (
            <CardItemCart
              key={item.productId}
              productId={item.productId}
              price={item.price}
              quantity={item.quantity}
            />
          ))
      }

      <Grid >
        <Typography 
          variant="h4"
          fontWeight={700}
        >
          Total: ${totalAmount}
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Button color="secondary" variant="contained" >
          Finalizar compra
        </Button>
      </Grid>

    </Grid>
  )
}
