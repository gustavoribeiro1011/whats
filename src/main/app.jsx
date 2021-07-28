import { React, useRef, useState } from 'react'

//import Form from "./../template/Form";
import Routes from "./routes"

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore';

import { useCollectionData } from 'react-firebase-hooks/firestore';

import { useAuthState } from 'react-firebase-hooks/auth'
import { faGlassMartiniAlt } from '@fortawesome/free-solid-svg-icons'



firebase.initializeApp({
  apiKey: "AIzaSyAexFGMfnjfuBY9FagShDsx7sq_YInVmhU",
  authDomain: "whatsapp-easy-form.firebaseapp.com",
  databaseURL: "https://whatsapp-easy-form-default-rtdb.firebaseio.com",
  projectId: "whatsapp-easy-form",
  storageBucket: "whatsapp-easy-form.appspot.com",
  messagingSenderId: "828917438658",
  appId: "1:828917438658:web:f693063dc21415cb27435b"
})

const auth = firebase.auth()
const firestore = firebase.firestore();
const messagesRef = firestore.collection('messages');

function SigIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }
  return (
    <button onClick={signInWithGoogle}>Entrar com Google</button>
  )
}

export function SignOut() {
  return auth.currentUser && auth.signOut()  
}

export  async function sendMessage(name,email,comments) {

  const { uid } = auth.currentUser;

  await messagesRef.add({
    name: name,
    email:email,
    comments:comments,
    uid
    })    
}

function App() {
  const [user] = useAuthState(auth)
  return (
    <div>

      {user ? <Routes /> : <SigIn />}
    </div>
  )
}

export default App