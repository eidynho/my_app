import Container from '@mui/material/Container'
import { makeStyles } from '@mui/styles'

import Header from '../partials/Header/Header'

const useStyles = makeStyles(() => ({
  container: {
    padding: '15px 0',
  }
}))

const TemplateDefault = ({ children }) => {
  const classes = useStyles()

  return (
    <>
      <Header />
      <Container className={classes.container}>
        {children}
      </Container>
    </>
  )
}

export default TemplateDefault