import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'


export const LoginPage = () => {
  return (
    <AuthLayout title='Login'>
      <form>
        <Grid container>
          <Grid item xs={12}>
            <TextField label='Email' type='email' sx={{ mb: 1 }} placeholder='correo@google.com' fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label='Password' type='password' sx={{ mb: 1 }} placeholder='Escribe una contraseña de 8 caracteres' fullWidth />
          </Grid>
          <Grid container spacing={2} sx={{ marginBottom: 2 }}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>Login</Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" sx={{ px: 4 }} fullWidth>
                <Google />
                <Typography sx={{ marginLeft: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>

            <Link color='inherit' component={RouterLink} to={'/auth/register'}>
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
