import styles from './App.module.css';
import Axios from 'axios';
import { useState, useEffect } from 'react';




function App() {
  const [excuseName, setExcuseName] = useState("");
  const [excuseExcuse, setExcuseExcuse] = useState(null);

  const fetchExcuse = (category) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}`).then((response) => {
      setExcuseExcuse(response.data[0]);
      setExcuseName(category);
    });
  };


  return (
    <div className={styles.App}>
      <br></br>
      <h1>Get Your Excuses</h1>
      <div className={styles.ButtonsDiv}>
        <button onClick={() => {fetchExcuse("family");}}>Family</button>
        <button onClick={() => {fetchExcuse("office");}}>Office</button>
        <button onClick={() => {fetchExcuse("children");}}>Children</button>
        <button onClick={() => {fetchExcuse("college");}}>College</button>
        <button onClick={() => {fetchExcuse("party");}}>Party</button>
        <button onClick={() => {fetchExcuse("funny");}}>Funny</button>
        <button onClick={() => {fetchExcuse("unbelievable");}}>Unbelievable</button>
        <button onClick={() => {fetchExcuse("developers");}}>Developers</button>
        <button onClick={() => {fetchExcuse("gaming");}}>Gaming</button>
      </div>

      {/* {console.log(excuseExcuse)} */}

      <br></br>

      <h2> For: {excuseName.charAt(0).toUpperCase() + excuseName.slice(1)} </h2>
      <h2>{excuseExcuse?.excuse}</h2>

    </div>
  );
}


export default App;
