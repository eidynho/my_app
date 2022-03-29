import React, { useState } from 'react'

import {
  Card,
  CardHeader,
  CardActions,
  Avatar,
  IconButton,
} from '@mui/material'

import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'


const CustomersCard = ({
  name,
  lastname,
  email,
  avatar,
}) => {

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" src={avatar}>
            R
          </Avatar>
        }
        title={`${name} ${lastname}`}
        subheader={email}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default CustomersCard