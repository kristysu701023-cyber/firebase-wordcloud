// Firebase 初始化與 Firestore 導出模組
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  onSnapshot, 
  query, 
  orderBy, 
  serverTimestamp, 
  getDocs, 
  deleteDoc, 
  doc,
  writeBatch
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

export const firebaseConfig = {
  projectId: "teacherstudy-5a354",
  appId: "1:928141599996:web:f4c879a551eafd9befe379",
  storageBucket: "teacherstudy-5a354.firebasestorage.app",
  apiKey: "AIzaSyBvS8UXanfX0R5dZ1sMMafUxssi-WyEDl4",
  authDomain: "teacherstudy-5a354.firebaseapp.com",
  messagingSenderId: "928141599996",
  projectNumber: "928141599996"
};

// 初始化 Firebase 應用
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export { 
  collection, 
  addDoc, 
  onSnapshot, 
  query, 
  orderBy, 
  serverTimestamp, 
  getDocs, 
  deleteDoc, 
  doc,
  writeBatch
};
