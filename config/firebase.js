
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

//funkce na login
import { getAuth, GoogleAuthProvider } from "firebase/auth";

//funkce pro databazi
import{ getFirestore } from "firebase/firestore";

//funkce pro storage
import{ getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD_jBgvwSWJbP2_P_civBenTF73AIKtG2I",
  authDomain: "sofalofi.firebaseapp.com",
  projectId: "sofalofi",
  storageBucket: "sofalofi.appspot.com",
  messagingSenderId: "280337745130",
  appId: "1:280337745130:web:152f78bb4c069845180393",
  measurementId: "G-CJYHHN2T28"
};

//firebase init
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

//login var
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

//var pro databazi
export const db = getFirestore(app);

//var pro storage
export const storage = getStorage(app);