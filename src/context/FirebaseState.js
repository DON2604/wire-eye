import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { useState } from "react";
import FirebaseContext from "./Firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCXzG71LawqujLj3uwxor06w3xbZQWphns",
  authDomain: "wire-eye.firebaseapp.com",
  databaseURL:
    "https://wire-eye-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "wire-eye",
  storageBucket: "wire-eye.appspot.com",
  messagingSenderId: "336759982231",
  appId: "1:336759982231:web:c9ad28d3daa8ad4c6741d2",
  measurementId: "G-R8YK20YEDK",
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

export const FirebaseProvider = (props) => {
  const initial = [];
  const [Post, setPost] = useState(initial);

  const GetPost = async () => {
    onValue(ref(database, "POST"), (snapshot) => {
      const res = snapshot.val();
      setPost(res);
    });
  };

  return (
    <FirebaseContext.Provider value={{ Post, GetPost }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
