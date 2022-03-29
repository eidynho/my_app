import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'
import useStyles from './Header.style'

const Header = () => {
  const classes = useStyles()
  return (
    <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
  )
}

export default Header