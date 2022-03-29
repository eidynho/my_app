import Container from '@mui/material/Container'

import Header from '../partials/Header/Header'

const TemplateDefault = ({ children }) => {

  return (
    <>
      <Header />
      <Container>
        {children}
      </Container>
    </>
  )
}

export default TemplateDefault