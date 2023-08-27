import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveNote } from '../../store/journal/journalSlice'

export const NavBarListItem = ({ id, title, body, date, imagesUrl = [] }) => {

    const dispatch = useDispatch();

    const newTitle = useMemo(() => {
        return (title.length > 17) ? title.substring(0, 17) + '...' : title;
    }, [title]);

    const onNoteSelected = () => {
        console.log('selected note!', id);
        dispatch( setActiveNote({ id, title, body, date, imagesUrl }));
    }

    return (
        <ListItem disablePadding onClick={ onNoteSelected }>
            <ListItemButton>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={newTitle} />
                    <ListItemText secondary={'voluptate blanditiis eos vero, laboriosam temporibus laborum sequi officia?'} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
