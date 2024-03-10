import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBMlYK2UPt5W0erbSMSsUGbpiI653sgtIU",
  authDomain: "proyectreactjsmr.firebaseapp.com",
  projectId: "proyectreactjsmr",
  storageBucket: "proyectreactjsmr.appspot.com",
  messagingSenderId: "427734845806",
  appId: "1:427734845806:web:562a2b2ecfd1d7f1a0597f",
  measurementId: "G-22NH20X2C3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
