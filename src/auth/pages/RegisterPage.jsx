import React, { useMemo, useState } from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { Button, Grid, TextField, Typography, Link, Alert } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { startCreateUserWithEmailAndPassword } from '../../store/auth/thunks'

const formData = {
  name: '',
  email: '',
  password: ''
};

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe contener @.'],
  password: [(value) => value.length >= 6, 'El password debe contener más de 6 caracteres.'],
  name: [(value) => value.length >= 1, 'El nombre es obligatorio.'],
}

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector(state => state.auth);

  const [formSubmited, setFormSubmited] = useState(false);

  const { name, email, password, onInputChange, formState, nameValid, emailValid, passwordValid, isFormValid } = useForm(formData, formValidations);

  console.log({ nameValid, emailValid, passwordValid, isFormValid });

  const onSubmit = (evt) => {
    evt.preventDefault();
    console.log({ name, email, password });
    setFormSubmited(true);

    if (!isFormValid) return;
    dispatch(startCreateUserWithEmailAndPassword(formState));
  }

  const isAuthenticated = useMemo(() => status === 'checking', [status]);



  return (
    <AuthLayout title='Registro'>

      {/* <Typography variant='h6' sx={{ mb: 2, color: isFormValid ? 'green':'red' }}>Form { isFormValid ? 'valido':'incorrecto' }</Typography> */}

      <form onSubmit={onSubmit} className='animate__animated animate__fadeIn'>
        <Grid container>
          <Grid item xs={12}>
            <TextField label='Nombre' type='text' sx={{ mb: 2 }} placeholder='Escribe tu nombre completo' fullWidth name='name'
              onChange={onInputChange} value={name} error={!!nameValid && formSubmited} helperText={nameValid} />
          </Grid>
          <Grid item xs={12}>
            <TextField label='Email' type='email' sx={{ mb: 2 }} placeholder='correo@google.com' fullWidth name='email'
              onChange={onInputChange} value={email} error={!!emailValid && formSubmited} helperText={emailValid} />
          </Grid>
          <Grid item xs={12}>
            <TextField label='Password' type='password' sx={{ mb: 2 }} placeholder='Escribe una contraseña de 8 caracteres' fullWidth name='password'
              onChange={onInputChange} value={password} error={!!passwordValid && formSubmited} helperText={passwordValid} />
          </Grid>
          <Grid container sx={{ marginBottom: 2, marginTop: 1, display: (errorMessage) ? 'block' : 'none' }}>
            <Alert severity='error'>{errorMessage}</Alert>
          </Grid>
          <Grid container spacing={2} sx={{ marginBottom: 2, marginTop: 1 }}>
            <Grid item xs={12}>
              <Button type='submit' variant="contained" fullWidth disabled={isAuthenticated}>Registrarme</Button>
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
