import styles from './App.module.css';
import Axios from 'axios';
import { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useHistory, useLocation } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Contact } from "./pages/Contact";
import { Profile } from "./pages/Profile";
import { Navbar } from "./pages/Navbar";

export const AppContext = createContext();


function App() {
  const [username, setUsername] = useState("Minion");

  return (
    <div className={styles.App}>
    <AppContext.Provider value={{username, setUsername}}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}


export default App;
