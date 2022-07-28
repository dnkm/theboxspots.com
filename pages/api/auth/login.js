// import { setAuthCookies } from 'next-firebase-auth';
// import initAuth from '../../../lib/initAuth';
// initAuth();

import { Query } from "pg";
import authChecker from "../../../lib/auth-checker";

export default async function handle(req, res) {
  let user = await authChecker(req, true); // req.headers.authorization -->(fb) --> uid --> (db) --> user_id, user info

  if (!user || user.type === "admin") {
    res.status(403).end();
  }
  

  res.json({});
}



// async function handler(req, res) {
//     try {
//         await setAuthCookies(req, res);
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({ error: "Unexpected error." });
//     }

//     return res.status(200).json({ success: true });
// }
