import React from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { Button, Grid, TextField, Typography, Link } from '@mui/material'
import { Link as RouterLink} from 'react-router-dom'

export const RegisterPage = () => {
  return (
    <AuthLayout title='Registro'>
      <form>
        <Grid container>
          <Grid item xs={12}>
            <TextField label='Nombre' type='text' sx={{ mb: 2 }} placeholder='Escribe tu nombre completo' fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label='Email' type='email' sx={{ mb: 2 }} placeholder='correo@google.com' fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label='Teléfono' type='text' sx={{ mb: 2 }} placeholder='Escribe tu número de teléfono' fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label='Password' type='password' sx={{ mb: 2 }} placeholder='Escribe una contraseña de 8 caracteres' fullWidth />
          </Grid>
          <Grid container spacing={2} sx={{ marginBottom: 2, marginTop: 1 }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>Registrarme</Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='center'>
            <Typography sx={{ mr: 1 }} >Ya tienes cuenta?</Typography>
            <Link color='inherit' component={RouterLink} to={'/auth/login'}>
              Loguéate
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
