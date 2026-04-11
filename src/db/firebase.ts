import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

if (!getApps().length) {
    initializeApp({
        credential: cert({
            projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
            clientEmail: import.meta.env.FIREBASE_CLIENT_EMAIL,
            privateKey: import.meta.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        }),
    });
}

export const db = getFirestore();