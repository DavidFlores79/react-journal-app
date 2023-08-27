import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../store/auth/authSlice';
import { FireBaseAuth } from '../firebase/config';
import { startGetAllNotes } from '../store/journal/thunks';

export const useCheckAuth = () => {

    const { status } = useSelector(state => state.auth);
    const dispatch = useDispatch();


    useEffect(() => {
        onAuthStateChanged(FireBaseAuth, async (user) => {

            if (!user) return dispatch(logout());

            const { email, password, displayName, photoURL, uid } = user;
            dispatch(login({ email, password, displayName, photoURL, uid }));
            dispatch( startGetAllNotes() );

        })
    }, []);

    return {
        status,
    }

}
