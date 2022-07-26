import { init } from 'next-firebase-auth';

export default function initAuth() {
    init({
        authPageURL: '/login',
        appPageURL: '/app',
        loginAPIEndpoint: '/api/auth/login',
        logoutAPIEndpoint: '/api/auth/logout',
        firebaseAdminInitConfig: {
            credential: {
                projectId: 'boxspots',
                clientEmail: 'firebase-adminsdk-9c0ax@boxspots.iam.gserviceaccount.com',
                privateKey: process.env.FB_PRIVATE_KEY ? String(process.env.FB_PRIVATE_KEY).replace(/\\n/g, "\n") : undefined
            }
        },
        firebaseClientInitConfig: {
            apiKey: "AIzaSyAneDX04pd0Te-RVOmsPfMgCzt7ir3QtnI",
            authDomain: "boxspots.firebaseapp.com",
            projectId: "boxspots"
        },
        cookies: {
            name: 'sess',
            secure: process.env.NODE_ENV === "production",
            maxAge: process.env.COOKIE_EXP,
            keys: [process.env.COOKIE_SECRET],
            signed: true,
            sameSite: "strict",
            overwrite: true
        }
    })
}