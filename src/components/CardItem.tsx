import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';
import { useCartStore } from '../hooks/useCartStore';
import { CartItem } from '../models/models';
import { useSnackbar } from 'notistack';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

interface CardItemProps {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  isOffer: boolean;
}

export const CardItem = ({ id, title, description, price, image, isOffer }: CardItemProps) => {

  const { onAddItem } = useCartStore();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const discountedPrice = price + (price * 0.3);

  const item: CartItem = {
    productId: id,
    price: price,
    quantity: 1,
  }

  const handleClcikAddItem = () => {
    onAddItem(item);
    enqueueSnackbar('Producto agregado al carrito', { variant: 'success' });
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
                <s>${discountedPrice}</s> - <b style={{ color: 'green' }}>${price}</b>
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
          onClick={() => handleClcikAddItem()}
        >
          Agregar al carrito
        </Button>
        <IconButton 
          aria-label="edit" 
          size="small"
          onClick={ () => navigate(`/product/edit/${id}`) }
        >
          <EditIcon fontSize="small" />
        </IconButton>
      </CardActions>
    </Card>
  );
}