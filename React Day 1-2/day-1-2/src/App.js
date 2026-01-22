import styles from './App.module.css';
import Axios from 'axios';
import { useState, useEffect } from 'react';




function App() {
  const [personName, setPersonName] = useState("");
  const [personAge, setPersonAge] = useState(null);


  const fetchPersonAge = () => {
    Axios.get(`https://api.agify.io/?name=${personName}`).then((response) => {
      setPersonAge(response.data);
    });
  };


  return (
    <div className={styles.App}>
      <input placeholder='Ex. Jaboody' onChange={(event) => {setPersonName(event.target.value)}}></input>
      <br></br>
      <br></br>
      <button onClick={fetchPersonAge}>Guess Age</button>

      <h1> Name: {personAge?.name} </h1>      
      <h1> Predicted Age: {personAge?.age} </h1>
      <h1> Count: {personAge?.count} </h1>

    </div>
  );
}


export default App;
