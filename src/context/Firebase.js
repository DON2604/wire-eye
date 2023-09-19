import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

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
const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const [Post, setPost] = useState([]);

  useEffect(() => {
    onValue(ref(database, "POST"), (snapshot) => {
    console.log(snapshot.val());
    setPost(snapshot.val());
  });
  }, []);

  return (
    <FirebaseContext.Provider value={{}}>
      {/* <h3>{Post}</h3> */}
      {props.children}
    </FirebaseContext.Provider>
  );
};
