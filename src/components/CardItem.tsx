import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useCartStore } from '../hooks/useCartStore';
import { CartItem } from '../models/models';


interface CardItemProps {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  isOffer: boolean;
}

export const CardItem = ({ id, title, description,  price, image, isOffer }:CardItemProps) => {

  const { onAddItem } = useCartStore();

  const discountedPrice = price + (price * 0.3);

  const item:CartItem = {
    productId: id,
    quantity: 1,
  }


  return (
    <Card sx={{ maxWidth: 345, minWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        component="img"
        alt="product image"
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        {
          isOffer
            ? (
                <Typography variant="body2">
                  <s>${discountedPrice}</s> - <b style={{color: 'green'}}>${price}</b> 
                </Typography>
              )
            : (
                <Typography variant="body2" color="text.secondary">
                  <b>${price}</b>
                </Typography>
              )
        }
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'end' }}>
        <Button 
          variant='contained'
          onClick={()=> onAddItem(item)}
        >
          Agregar al carrito
        </Button>
      </CardActions>
    </Card>
  );
}