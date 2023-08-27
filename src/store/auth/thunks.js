import { firebaseLogin, firebaseLogout, firebaseRegister, signInWithGoogle } from "../../firebase/providers"
import { checkCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkCredentials())
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkCredentials())

        const result = await signInWithGoogle();

        if (!result.ok) return dispatch(logout(result));

        dispatch(login(result));
    }
}

export const startCreateUserWithEmailAndPassword = ({ name, email, password }) => {

    return async (dispatch) => {
        dispatch(checkCredentials())

        const result = await firebaseRegister({ name, email, password });
        console.log({ result });

        if (!result.ok) return dispatch(logout(result));

        dispatch(login(result));

    }
}

export const startLoginWithEmailAndPassword = ({ email, password }) => {

    return async (dispatch) => {
        dispatch(checkCredentials())

        const result = await firebaseLogin({ email, password });
        console.log({ result });

        if (!result.ok) return dispatch(logout(result));

        dispatch(login(result));

    }
}

export const startLogout = () => {
    return async (dispatch) =>  {

        await firebaseLogout();
        dispatch(logout());

    }
}