import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDC12kkA1XodQi2-0Nb8IK0qIPg2Qc1RTI",
  authDomain: "chat-bot-387ab.firebaseapp.com",
  projectId: "chat-bot-387ab",
  storageBucket: "chat-bot-387ab.appspot.com",
  messagingSenderId: "1021169525420",
  appId: "1:1021169525420:web:3b0789dfccf77bd8e1f509"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
