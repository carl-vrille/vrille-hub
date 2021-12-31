import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import "./app.scss";
import { useState } from "react";

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyA3uWtV6Mh-yXcIWCczBiU7aRUfw4hzkco",
  authDomain: "vrille-hub.firebaseapp.com",
  projectId: "vrille-hub",
  storageBucket: "vrille-hub.appspot.com",
  messagingSenderId: "949111706922",
  appId: "1:949111706922:web:72ae12cb7fee5b3adfba53",
  measurementId: "G-HGPYSEZV9T"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> 
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
     </div>
  );
}

export default App;
