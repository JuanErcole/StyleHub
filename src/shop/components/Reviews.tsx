import { Box } from "@mui/material"
import Typography from '@mui/material/Typography';

import Grid from '@mui/material/Grid';
import { ReviewItem } from "../../components/ReviewItem";



const REVIEWS_LIST = [
  {
    id: 1,
    userName: 'userName_1',
    comment: 'Review user 1 description',
  },
  {
    id: 2,
    userName: 'user_2',
    comment: 'Review user 2 description',
  },
  {
    id: 3,
    userName: 'user_3',
    comment: 'Review user 3 description',
  },
  {
    id: 4,
    userName: 'user_4',
    comment: 'Review user 4 description',
  },
  {
    id: 5,
    userName: 'user_5',
    comment: 'Review user 5 description',
  },
  {
    id: 6,
    userName: 'user_6',
    comment: 'Review user 6 description',
  }
]

const firstSix = REVIEWS_LIST.slice(0, 6);

export const Reviews = () => {
  return (
    <Box textAlign='center' py='50px'>
      <Typography variant="h2" mb='30px'>
        Comentarios de clientes
      </Typography>
      <Grid
        display='flex'
        flexDirection='column'
        gap={2}
      >
        {
          firstSix.map((review) => (
            <ReviewItem key={review.id} userName={review.userName} comment={review.comment} />
          ))
        }
      </Grid>
    </Box>
  )
}
