import {initFirestore} from "@auth/firebase-adapter";
import admin from "firebase-admin";

let app;

const destPath = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/gm, "\n") ? process.env.FIREBASE_PRIVATE_KEY : "undefined"



if (!admin.apps.length){
    app = admin.initializeApp({
        credential: admin.credential.cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: destPath,
        })
    });
}

const adminDb = initFirestore({

    

    credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: destPath,
    })
})

const adminAuth = admin.auth(app);
export {adminDb, adminAuth};