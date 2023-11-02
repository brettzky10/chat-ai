import { getApp, getApps, initializeApp} from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDp5GFs2OThCT0tzVSZcnfly6-1UCpq1-8",
    authDomain: "chat-ai-fa94f.firebaseapp.com",
    projectId: "chat-ai-fa94f",
    storageBucket: "chat-ai-fa94f.appspot.com",
    messagingSenderId: "826344511886",
    appId: "1:826344511886:web:fac3446052154ddf8f2cdf"
  };

  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const functions = getFunctions(app);

  export {db, auth, functions};