import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FireBaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {

    try {
        const result = await signInWithPopup(FireBaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        const { displayName, email, photoURL, uid } = result.user;
        
        return {
            ok: true,
            displayName, 
            email, 
            photoURL, 
            uid
        }
    } catch (error) {
        console.log(error);

        const errorCode = error.code;
        const errorMessage = error.message;

        console.log({errorCode, errorMessage});

        return {
            ok: false,
            errorMessage,
            errorCode,
        }
    }
}

export const firebaseRegister = async ({name, email, password}) => {

    try {
        
        const result = await createUserWithEmailAndPassword(FireBaseAuth, email, password);

        await updateProfile(FireBaseAuth.currentUser, {
            displayName: name,
            photoURL: 'https://res.cloudinary.com/dltvxi4tm/image/upload/v1679101186/adizqopkcvodldtou7re.png',
        });

        const { displayName, photoURL, uid } = FireBaseAuth.currentUser;
        console.log({ displayName, email, photoURL, uid });
        
        return {
            ok: true,
            displayName, 
            email,
            photoURL, 
            uid
        }
    } catch (error) {
        console.log(error);

        const errorCode = error.code;
        const errorMessage = error.message;

        console.log({errorCode, errorMessage});

        return {
            ok: false,
            errorMessage,
            errorCode,
        }
    }
}

export const firebaseLogin = async ({email, password}) => {

    try {
        
        const result = await signInWithEmailAndPassword(FireBaseAuth, email, password);
        const { displayName, photoURL, uid } = result.user;
        console.log({ displayName, email, photoURL, uid });
        
        return {
            ok: true,
            displayName, 
            email,
            photoURL, 
            uid
        }
    } catch (error) {
        console.log(error);

        const errorCode = error.code;
        const errorMessage = error.message;

        console.log({errorCode, errorMessage});

        return {
            ok: false,
            errorMessage,
            errorCode,
        }
    }
}

export const firebaseLogout = async () => {
    return await FireBaseAuth.signOut();
}