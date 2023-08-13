import { StarOutlined } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'
import React from 'react'

export const DefaultView = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 5 }}
        >

            <Grid item xs={12}>
                <StarOutlined sx={{fontSize: 100, color: 'white'}}/>
            </Grid>
            <Grid item xs={12}>
                <Typography variant='h5' sx={{ color: 'white' }}>
                    Selecciona o Crea una entrada
                </Typography>
            </Grid>

        </Grid>
    )
}
