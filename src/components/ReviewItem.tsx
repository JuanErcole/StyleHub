import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

interface ReviewitemProps {
  userName: string;
  comment: string;
}

export const ReviewItem = ({ userName, comment }: ReviewitemProps) => {


  return (
    <Grid>
      <Box 
        textAlign='start' 
        bgcolor='#8caede'
        borderRadius={3}
        px='1rem'
      >
        <Typography variant="h4" >
          {userName}
        </Typography>
      </Box>
      <Box 
        textAlign='start' 
        bgcolor='#c6ceff' 
        px='1rem'
        borderRadius={3}
      >
        <Typography variant="h6" >
          {comment}
        </Typography>
      </Box>
    </Grid>
  )
}
