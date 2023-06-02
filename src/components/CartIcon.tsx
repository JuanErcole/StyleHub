import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCartStore } from '../hooks/useCartStore';
import { useNavigate } from 'react-router-dom';


const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export const CartIcon = () => {

  const navigate = useNavigate();

  const { items } = useCartStore();

  const itemsInCart = items.length;

  return (
    <IconButton
      aria-label="cart"
      onClick={() => navigate('/cart')}
    >
      <StyledBadge badgeContent={itemsInCart} color="secondary">
        <ShoppingCartIcon sx={{ color: '#ffff' }} />
      </StyledBadge>
    </IconButton>
  );
}