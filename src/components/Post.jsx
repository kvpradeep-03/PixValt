import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share'
import { red } from '@mui/material/colors'
import { Margin } from '@mui/icons-material'
import { theme } from '../theme'
const Post = () => {
  return (
      <Card sx={{ bgcolor: 'background.default', color: 'text.primary', margin: 3}}>
          <CardHeader
              avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      R
                  </Avatar>
              }
              action={
                  <IconButton aria-label="settings">
                      <MoreVertIcon />
                  </IconButton>
              }
              title="John Whick"
              subheader="September 17, 2025"
          />
          <CardMedia
              component="img"
              height="20%"
              image="https://t4.ftcdn.net/jpg/11/19/34/57/240_F_1119345701_6CAppnAHrKDolFYKJucG0JvkiRchT2Ka.jpg"
              alt="Paella dish"
          />
          <CardContent>
              <Typography variant="body2" >
                  This impressive paella is a perfect party dish and a fun meal to cook
                  together with your guests. Add 1 cup of frozen peas along with the mussels,
                  if you like.
              </Typography>
          </CardContent>
          <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                  <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
              </IconButton>
              <IconButton aria-label="share">
                  <ShareIcon />
              </IconButton>
          </CardActions>
      </Card>
  )
}

export default Post