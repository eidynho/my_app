import { useState } from 'react'
import {
  TextField,
  Button,
  Typography,
 } from '@mui/material'
import { useHistory } from 'react-router-dom'

 import useAuth from '../state/auth'


const Login = () => {

  const history = useHistory()

  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const [isLoading, setIsLoading] = useState(false)
  const { user, setUser } = useAuth()

  const handleInputChange = e => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value
    })
  }

  const handleFormSubmit = () => {
    setIsLoading(true)
    setTimeout(() => {
      setUser({
        logged: true,
        email: form.email,
      })

      history.push('/')
    }, 4000)
  }

  return (
    <>
      <Typography variant="h3">Acesso Restrito</Typography>

      <div>
        <TextField
          onChange={handleInputChange}
          label="Digite o seu e-mail"
          name="email"
        />
      </div>
      <div>
        <TextField
          onChange={handleInputChange}
          label="Digite sua senha"
          name="password"
          type="password"
        />
      </div>
      <div>
        <Button variant="contained" color="primary" onClick={handleFormSubmit}>
          {
            isLoading
            ? 'Aguarde...'
            : 'Entrar'
          }
        </Button>
      </div>
    </>
  )
}

export default Login