import React from 'react';
import './style.css';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'; 
import { auth } from '../../firebase';

const SignIn = () => {
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider(); 
        signInWithPopup(auth, provider).then((result) => { 
            // Handle successful sign-in
            console.log('User signed in successfully:', result.user);
        }).catch((error) => {
            // Handle errors
            console.error('Error signing in:', error);
        });
    };

    return (
        <div className='signin-container'>
            <button onClick={signInWithGoogle}>Sign in With Google</button>
        </div>
    );
};

export default SignIn;
