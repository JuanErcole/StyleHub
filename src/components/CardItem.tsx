import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface CardItemProps {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  isOffer: boolean;
}

export const CardItem = ({ id, title, description,  price, image, isOffer }:CardItemProps) => {

  const discountedPrice = price + (price * 0.3);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
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
      <CardActions>
        <Button variant='contained'>
          Agregar al carrito
        </Button>
      </CardActions>
    </Card>
  );
}