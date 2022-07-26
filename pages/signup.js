import { useState } from 'react';
import styles from '../styles/Signup.module.scss';
import firebase from 'firebase/app';
import 'firebase/auth';
import { withAuthUserTokenSSR, withAuthUser, AuthAction } from 'next-firebase-auth';
import Link from 'next/link';

function SignUp() {
    let [error, setError] = useState("");

    const submitForm = async (e) => {
        e.preventDefault();

        let email = e.target.email.value;
        let password = e.target.password.value;
        let rpassword = e.target.rpassword.value;

        if (password !== rpassword) return setError("Passwords do not match");

        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className={styles.page}>
            <div />

            <form className={styles.form} onSubmit={submitForm}>
                <h1>Create an Organization</h1>
                <p>Design your journey with Box Spots</p>

                <h3>{error}</h3>

                <div />

                <input id="email" placeholder='Email' autoCapitalize='none' autoCorrect='none' />

                <input id="password" placeholder='Password' autoCapitalize='none' autoCorrect='none' type="password" />

                <input id="rpassword" placeholder='Retype Password' autoCapitalize='none' autoCorrect='none' type="password" />
            </form >

            <div className={styles.next}>
                <button>
                    <i />
                </button>
            </div>
        </div >
    );
}

export const getServerSideProps = withAuthUserTokenSSR({
    whenAuthed: AuthAction.REDIRECT_TO_APP
})()

export default withAuthUser({
    whenAuthed: AuthAction.REDIRECT_TO_APP
})(SignUp)