import { useState } from 'react'
import axios from 'axios'

import {
  TextField,
  Button,
  CircularProgress,
 } from '@mui/material'

import Toasty from '../../components/Toasty'

const CustomersRegister = () => {
  const [form, setForm] = useState({
    name: {
      value: '',
      error: false
    },
    job: {
      value: '',
      error: false
    },
  })

  const [openToasty, setOpenToasty] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  const handleInputChange = (e) => {
    const { name, value } = e.target
    
    setForm({
      ...form,
      [name]: {
        value,
      },
    })
  }

  const handleRegisterButton = () => {
    setIsLoading(true)

    let hasError = false
    let newFormState = {
      ...form,
    }
    if(!form.name.value) {
      hasError = true

      newFormState.name = {
        value: form.name.value,
        error: true,
        helperText: 'Digite o campo nome corretamente',
      }
    }

    if(!form.job.value) {
      hasError = true

      newFormState.job = {
        value: form.job.value,
        error: true,
        helperText: 'Digite o campo cargo corretamente',
      }
    }

    if (hasError) {
      return setForm(newFormState)
    }

    axios.post('https://reqres.in/api/users', {
      "name": form.name.value,
      "job": form.job.value,
    })
    .then(response => {
      console.log('ok! (método POST)', response)
      setOpenToasty(true)
      setIsLoading(false)
    })
  }

  return (
    <>
      <div>
        <TextField
          error={form.name.error}
          helperText={form.name.erro ? form.name.helperText : ''}
          label="Digite o seu nome"
          variant="outlined"
          name="name"
          value={form.name.value}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <TextField
          error={form.job.error}
          helperText={form.job.erro ? form.job.helperText : ''}
          label="Digite o seu cargo"
          variant="outlined"
          name="job"
          value={form.job.value}
          onChange={handleInputChange}
        />
      </div>
      <div sx={{ m: 1, position: 'relative' }}>
        <Button
          variant="outlined"
          onClick={handleRegisterButton}
          disabled={isLoading}
        >
          Cadastrar
          {
            isLoading
            ? <CircularProgress
                visibility={isLoading}
                size={24}
                sx={{
                  color: 'green',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  marginTop: '-12px',
                  marginLeft: '-12px',
                }}
              />
           : ''
          }

        </Button>
      </div>
      <Toasty
        open={openToasty}
        message="Cadastro realizado com sucesso!"
        severity="success"
        onClose={() => setOpenToasty(false)}
      />
    </>
  )
}

export default CustomersRegister