import { AddOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { DefaultView } from '../views/DefaultView'
import { useDispatch, useSelector } from 'react-redux'
import { startAddNote } from '../../store/journal/thunks'
import { NoteView } from '../views/NoteView'

export const JournalPage = () => {

    const dispatch = useDispatch();
    const { isSaving, activeNote } = useSelector(state => state.journal);
    

    const onNewNote = () => {
        dispatch(startAddNote());
    }

    return (
        <>
            <JournalLayout>
                {
                    (!!activeNote) ? <NoteView/> : <DefaultView /> 
                }
                
                <IconButton
                    onClick={onNewNote}
                    size='large'
                    disabled={ isSaving }
                    sx={{
                        color: 'white',
                        backgroundColor: 'error.main',
                        ':hover': { backgroundColor: 'error.main', opacity: 0.8 },
                        position: 'fixed',
                        right: 50,
                        bottom: 50,
                    }}
                >

                    <AddOutlined sx={{ fontSize: 30 }} />
                </IconButton>
            </JournalLayout>
        </>
    )
}
