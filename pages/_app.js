import Head from "next/head";
import { useEffect, useState } from "react";
import { firebaseApp } from "../lib/fbase";
import SiteContext from "../lib/site-context";
import "../styles/globals.css";
import { initializeAuth } from "firebase/auth";
import axios from "axios";

// import initAuth from '../lib/initAuth';

// initAuth();

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  let [user, setUser] = useState(null);

  useEffect(() => {
    let fauth = initializeAuth(firebaseApp);

    fauth.onAuthStateChanged((fb_user) => {
      if (fb_user) {
        // axios.get(`/auth?uid=${fb_user.uid}`).then((user) => setUser(user));
        fb_user.getIdToken(false).then((idtoken) => {
          axios.post(
            `/api/auth/login?a=123`,
            {
              data: { x: 10, y: 20 },
            },
            {
              headers: {
                authorization: `bearer ${idtoken}`,
              },
            }
          );
        });
      } else {
        console.log("not signed in");
      }
    });
  }, []);

  return (
    <SiteContext.Provider value={{ user, setUser }}>
      <Head>
        <title>Box Spots</title>
      </Head>

      <Component {...pageProps} />
    </SiteContext.Provider>
  );
}
