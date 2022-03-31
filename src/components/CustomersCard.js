import React, { useState } from 'react'

import {
  Card,
  CardHeader,
  CardActions,
  Avatar,
  IconButton,
} from '@mui/material'

import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

import ModalConfirm from './ModalConfirm'

const CustomersCard = ({
  id,
  name,
  lastname,
  email,
  avatar,
  onRemoveCustomer,
  onEditCustomer,
}) => {
  const [openModal, setOpenModal] = useState(false)

  const handleToggleOpenModal = () => {
    setOpenModal(!openModal)
  }

  const handleConfirmModal = () => {
    onRemoveCustomer(id)
    handleToggleOpenModal()
  }

  const handleRemoveCustomer = () => {
    handleToggleOpenModal()
  }

  const handleEditCustomer = id => {
    onEditCustomer(id)
  }

  return (
    <>
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
          <IconButton aria-label="editar cadastro" onClick={() => handleEditCustomer(id)}>
            <EditIcon />
          </IconButton>
          <IconButton aria-label="remover cadastro" onClick={handleRemoveCustomer}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
      <ModalConfirm 
        open={openModal}
        onClose={handleToggleOpenModal}
        onConfirm={() => handleConfirmModal(id)}
        title="Deseja realmente excluir este cadastro?"
        message="Ao confirmar não será possível reverter essa operação"
      />
    </>
  )
}

export default CustomersCard