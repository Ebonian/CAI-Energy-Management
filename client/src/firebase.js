import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnoG7SN7Qdj9hCNEZwNmf9mJoSk3MOOHE",
  authDomain: "cai-energy-management.firebaseapp.com",
  projectId: "cai-energy-management",
  storageBucket: "cai-energy-management.appspot.com",
  messagingSenderId: "347675396308",
  appId: "1:347675396308:web:3a7dcef87705c17def1341",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
