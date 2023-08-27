import { Google } from '@mui/icons-material'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailAndPassword } from '../../store/auth/thunks'

const formData = {
  email: '',
  password: ''
};

export const LoginPage = () => {

  const dispatch = useDispatch();

  const { status, errorMessage } = useSelector(state => state.auth);

  const { email, password, onInputChange } = useForm(formData);

  const onSubmit = (evt) => {
    evt.preventDefault();
    console.log({ email, password });
    dispatch(startLoginWithEmailAndPassword({ email, password }));
  }

  const onGoogleSignIn = () => {
    console.log('Google Sign In');
    dispatch(startGoogleSignIn());
  }

  const isAuthenticated = useMemo(() => status === 'checking', [status]);

  return (
    <AuthLayout title='Login'>
      <form onSubmit={onSubmit} className='animate__animated animate__fadeIn'>
        <Grid container>
          <Grid item xs={12}>
            <TextField label='Email' type='email' name='email' sx={{ mb: 1 }} placeholder='correo@google.com' fullWidth onChange={onInputChange} value={email} />
          </Grid>
          <Grid item xs={12}>
            <TextField label='Password' name='password' type='password' sx={{ mb: 1 }} placeholder='Escribe una contraseña de 8 caracteres' fullWidth onChange={onInputChange} value={password} />
          </Grid>
          <Grid container sx={{ marginBottom: 2, marginTop: 1, display: (errorMessage) ? 'block' : 'none' }}>
            <Alert severity='error'>{errorMessage}</Alert>
          </Grid>
          <Grid container spacing={2} sx={{ marginBottom: 2 }}>
            <Grid item xs={12} sm={6}>
              <Button type='submit' variant="contained" fullWidth disabled={isAuthenticated}>Login</Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" sx={{ px: 4 }} fullWidth onClick={onGoogleSignIn} disabled={isAuthenticated}>
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
