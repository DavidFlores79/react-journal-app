import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { ImageGallery } from '../components/ImageGallery'

export const NoteView = () => {
  return (
    <Grid container direction={'row'} justifyContent={'space-between'} sx={{mb: 1}}>
        <Grid item>
            <Typography sx={{fontSize: '39', fontWeight: 'light'}}>
                12 de Agosto de 2023
            </Typography>
        </Grid>
        <Grid item>
            <Button color='primary' sx={{ padding: 2 }}>
                <SaveOutlined sx={{ fontSize: 30, mr: 1}}/>
            </Button>
        </Grid>

        <Grid container>
            <TextField
                type='text'
                variant='filled'
                fullWidth
                placeholder='Ingrese un Título'
                label='Título'
                sx={{border: 'none', mb: 3}}
            >
            </TextField>

            <TextField
                type='text'
                variant='filled'
                fullWidth
                multiline
                minRows={5}
                placeholder='Describa la nota que desea guardar...'
                label='Nota'
                sx={{border: 'none', mb: 3}}
            >
            </TextField>  

            {/* image gallery  */}
            <ImageGallery/>
        </Grid>
    </Grid>
  )
}
