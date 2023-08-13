import { AddOutlined, MailOutline } from '@mui/icons-material'
import { Button, IconButton, Typography } from '@mui/material'
import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { DefaultView } from '../views/DefaultView'
import { NoteView } from '../views/NoteView'

export const JournalPage = () => {
    return (
        <>
            <JournalLayout>
                {/* <NoteView/> */}
                <DefaultView/>



                <IconButton
                    size='large'
                    sx={{
                        color: 'white',
                        backgroundColor: 'error.main',
                        ':hover' : { backgroundColor: 'error.main', opacity: 0.8},
                        position: 'fixed',
                        right: 50,
                        bottom: 50,
                    }}
                >

<AddOutlined sx={{ fontSize: 30 }}/>
                </IconButton>
            </JournalLayout>
        </>
    )
}
