// import { withAuthUserTokenSSR, withAuthUser, AuthAction } from 'next-firebase-auth';
import Image from "next/image";
import styles from "../styles/Login.module.scss";
import { useState } from "react";
import Link from "next/link";
import { firebaseApp } from "../lib/fbase";
import { initializeAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  let [err, setErr] = useState(false);

  const formSubmitted = async (e) => {
    e.preventDefault();

    let email = e.target.email.value;
    let password = e.target.password.value;

    try {
      let auth = initializeAuth(firebaseApp);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
      setErr(true);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <Image src="/logo1.png" alt="" width={60} height={60} />
          </a>
        </Link>
      </div>

      <div className={styles.login}>
        <h1>Login to Organization</h1>

        <p className={err ? styles.error : undefined}>
          {err
            ? "Invalid credentials"
            : "Please ask your organization owner for credentials"}
        </p>

        <div className={styles.border} />

        <form onSubmit={formSubmitted}>
          <input
            id="email"
            autoCapitalize="none"
            autoCorrect="none"
            placeholder="Email"
            value="test@test.com"
          />
          <input
            id="password"
            autoCapitalize="none"
            autoCorrect="none"
            type="password"
            placeholder="Password"
            value="P@ssw0rd"
          />

          <button>Login</button>
        </form>
      </div>

      <div className={styles.signup}>
        <h1>First Time Here?</h1>
        <p>Create your organization account to start setting up spots!</p>
        <Link href="/signup">
          <a>Sign Up</a>
        </Link>
      </div>
    </div>
  );
}

// export const getServerSideProps = withAuthUserTokenSSR({
//   whenAuthed: AuthAction.REDIRECT_TO_APP,
// })();

// export default withAuthUser({
//   whenAuthed: AuthAction.REDIRECT_TO_APP,
// })(Login);
