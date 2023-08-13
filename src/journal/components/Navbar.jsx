import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const Navbar = ({ drawerWith = 240 }) => {
    return (
        <>
            <AppBar position='fixed' sx={{
                width: { sm: `calc(100% - ${drawerWith}px)` },
                ml: { sm: `${drawerWith}px` }
            }}>


                <Toolbar>
                    <IconButton color='inherit' edge='start' sx={{ mr: 2, display: { sm: 'none' } }}>
                        <MenuOutlined />
                    </IconButton>

                    <Grid container direction={'row'} justifyContent={{ xs: 'center', sm: 'start' }}>
                        <Typography variant='h6' component={'div'} noWrap alignContent={'center'}>JournalApp</Typography>
                    </Grid>

                    <IconButton color='error'>
                        <LogoutOutlined />
                    </IconButton>

                </Toolbar>
            </AppBar>
        </>
    )
}