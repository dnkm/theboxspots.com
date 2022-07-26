import { setAuthCookies } from 'next-firebase-auth';
import initAuth from '../../../lib/initAuth';

initAuth();

export default async function handler(req, res) {
    try {
        await setAuthCookies(req, res);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Unexpected error." });
    }

    return res.status(200).json({ success: true });
}