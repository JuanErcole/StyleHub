import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCartStore } from '../hooks/useCartStore';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export const CartIcon = () => {

  const { items } = useCartStore();

  const itemsInCart = items.length;

  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={itemsInCart} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}