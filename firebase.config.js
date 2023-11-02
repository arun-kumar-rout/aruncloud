import { initializeApp, getApp, getApps } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "aruncloud-400407.firebaseapp.com",
  projectId: "aruncloud-400407",
  storageBucket: "aruncloud-400407.appspot.com",
  messagingSenderId: "441271508721",
  appId: "1:441271508721:web:2feb53796dbff52ba21350",
  measurementId: "G-DMX1MYJ855"
};

// const analytics = getAnalytics(app);
const app = getApps.length > 0 ? getApp : initializeApp(firebaseConfig);
export default app;