import { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'

import { useHistory } from 'react-router-dom'

import MenuIcon from '@mui/icons-material/Menu'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import PeopleIcon from '@mui/icons-material/People'
import HomeIcon from '@mui/icons-material/Home'

import useStyles from './Header.style'
import { Router } from 'react-router-dom'

const Header = ( { user }) => {
  const classes = useStyles()
  const history = useHistory()

  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleMenuClick = route => {
    history.push(route)
    handleToggleMenu()
  }

  return (
    <>
      <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => handleToggleMenu()}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" className={classes.title}>
              My App
            </Typography>
            {
              user.logged
                ? <Typography variant="h6">{user.email}</Typography>
                : <Button color="inherit">Login</Button>
            }
          </Toolbar>
        </AppBar>
        
        <Drawer open={menuOpen} onClose={() => handleToggleMenu()}>
          <List>

            <ListItem button onClick={() => handleMenuClick('/')}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem>

            <ListItem button onClick={() => handleMenuClick('/customers')}>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText>Lista de Clientes</ListItemText>
            </ListItem>

            <ListItem button onClick={() => handleMenuClick('/customers/add')}>
              <ListItemIcon>
                <PersonAddIcon />
              </ListItemIcon>
              <ListItemText>Cadastro de Clientes</ListItemText>
            </ListItem>
          </List>
        </Drawer>
    </>
  )
}

export default Header