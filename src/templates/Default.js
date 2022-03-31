import Container from '@mui/material/Container'

import Header from '../partials/Header/Header'
import useAuth from '../state/auth'

const Default = ({ children }) => {

  const { user } = useAuth()

  return (
    <>
      <Header user={user} />
      <Container>
        {children}
      </Container>
    </>
  )
}

export default Default