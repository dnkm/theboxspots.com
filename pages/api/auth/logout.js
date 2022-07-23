import { unsetAuthCookies } from 'next-firebase-auth';
import initAuth from '../../../lib/initAuth';

initAuth();

export default async function handler(req, res) {
    try {
        await unsetAuthCookies(req, res);
    } catch (error) {
        return res.status(500).json({ error: "Unexpected error." });
    }

    return res.status(200).json({ success: true });
}