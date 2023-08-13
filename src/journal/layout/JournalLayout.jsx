import { Box, Toolbar } from '@mui/material'
import React from 'react'
import { Navbar } from '../components/Navbar';
import { SideBar } from '../components/SideBar';

export const JournalLayout = ({ children }) => {


    const drawerWith = 240;

  return (
    <Box sx={{display: 'flex'}}>

        {/* Navbar  drawerWith*/}
        <Navbar drawerWith={drawerWith}/>


        {/* Sidebar drawerWith*/}
        <SideBar drawerWith={drawerWith}/>


        <Box component='main' sx={{flexGrow: 1, p: 3}}>
            {/* Toolbar  */}
            <Toolbar/>
            { children }
        </Box>
    </Box>
  )
}
