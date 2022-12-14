import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home'
import { Contact } from './pages/Contact'
import { About } from './pages/About'
import { Signup } from './pages/Signup'

// import firebase 
import { initializeApp } from "firebase/app";
import { FirebaseConfig } from './config/FirebaseConfig';

//import firebase auth
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"

//initialise Firebase 
const FBapp = initializeApp(FirebaseConfig);
//initialise Firebase auth
const FBauth = getAuth(FBapp) 

//function to create user account
const signup = (email, password) => {
  return new Promise (( resolve, reject )=> {
    createUserWithEmailAndPassword(FBauth,email, password)
    .then((userCredential) => resolve(userCredential.user))
    .catch((error) => reject(error))
  })
}

const NavData = [
  {name: "Home", path: "/", public: true},
  {name: "About", path: "/about", public: true},
  {name: "Contact", path: "/contact", public: true},
  {name: "Sign Up", path: "/signup", public: true}

]

function App() {
  return (
    <div className="App">
      <Header title = "My App" headernav = {NavData}/>
      <Routes>
        <Route path ="/" element = {<Home/>} />
        <Route path ="/about" element = {<About/>} />
        <Route path ="/contact" element = {<Contact/>} />
        <Route path='/signup' element = {<Signup handler = {signup}/>}/>
      </Routes>
      <Footer year = "2022" /> 
    </div>
  );
}

export default App;
