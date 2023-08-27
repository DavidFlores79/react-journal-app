import { createSlice } from '@reduxjs/toolkit';



export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        message: '',
        notes: [],
        activeNote: null,
        // activeNote: {
        //     id: 'ABC123',
        //     title: '',
        //     body: '',
        //     date: 12345678,
        //     imageUrls: [],
        // },

    },
    reducers: {
        addNote: (state, action) => {
            state.notes.push(action.payload);
        },
        setActiveNote: (state, action) => {
            state.activeNote = action.payload;
        },
        getAllNotes: (state, action) => {
            state.notes = action.payload;
        },
        updateNoteById: (state, action) => {

        },
        deleteNoteById: (state, action) => {

        },
        setSaving: (state, action) => {
            state.isSaving = action.payload;
        },
    }
});


export const {
    addNote,
    setActiveNote,
    getAllNotes,
    updateNoteById,
    deleteNoteById,
    setSaving
} = journalSlice.actions;