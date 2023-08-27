import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FireBaseDB } from "../../firebase/config";
import { addNote, getAllNotes, setActiveNote, setSaving } from "./journalSlice";
import { getAllNotesFromDB } from "../../helpers/getNotes";

export const startAddNote = () => {
    return async ( dispatch, getState ) => {

        console.log('start new note!!');


        //uid,
        
        const { uid } = getState().auth;
        console.log(uid);

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
            imageUrls: [],
        }

        dispatch( setSaving( true ) );
        const newDoc = doc( collection(FireBaseDB, `${uid}/journal/notes`) );
        const response = await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;

        console.log({newDoc, response});

        //dispatch
        dispatch( addNote( newNote ) );
        dispatch( setActiveNote( newNote ) );
        dispatch( setSaving( false ) );
        //dispatch (nueva Nota)
        //dispatch (activar Nota)

    }
} 

export const startGetAllNotes = () => {
    return async( dispatch, getState ) => {
        const { uid } = getState().auth;

        if(!uid) throw new Error('El id del usuario no existe!!');
        console.log({uid});

        const notes = await getAllNotesFromDB(uid);

        //dspatch
        dispatch( getAllNotes(notes) );

    }
}