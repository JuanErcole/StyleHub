import { Box, Grid } from "@mui/material";
import { useProductStore } from "../../hooks/useProductStore";
import Typography from '@mui/material/Typography';



interface CardItemCartProps {
  productId: string;
  price: number;
  quantity: number;
}


export const CardItemCart = ({ productId, price, quantity }: CardItemCartProps) => {

  const { products } = useProductStore();

  const item = products.find(product => product.id === productId);

  return (
    <Grid>

      <Grid item xs={8}>
        <Typography variant="h6">
          {item?.name}
        </Typography>
        <Typography variant="body1">
          {item?.description} - X{quantity} = ${price * quantity}
        </Typography>
        <Typography variant="body1">
          Precio unitario ${price}
        </Typography>
      </Grid>
      
    </Grid>
  )
}
