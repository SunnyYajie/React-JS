import styles from './App.module.css';
import { Planets } from './Planets';
import { useState } from 'react';



function App() {
  // Exercise 3
  // const planets = [
  //   {name: 'Earth', isGasPlanet: false},
  //   {name: 'Jupiter', isGasPlanet: true},
  //   {name: 'Mars', isGasPlanet: false},
  //   {name: 'Uranus', isGasPlanet: true},
  // ];

  // Exercise 4:

  // const [input, setInput] = useState("");
  // const [displayText, setDisplayText] = useState("");
  // const [textColor, setColor] = useState("");

  // const changeTextAndColor = (event) => {
  //   setDisplayText(input)
  //   setColor(input)
  // };

  const [nameList, setList] = useState(['first', 'second']);
  const [name, setName] = useState('');

  const changeInput = (event) => {
    setName(event.target.value);
  };

  const addName = () => {
    if (!name) return;

    setList(prev => [name, ...prev]);
    setName('');
  };

  const removeName = () => {
    if (!name) return;

    setList(prev => prev.filter(item => item !== name));
    setName('');
  };

  const resetList = () => {
    setList([]);
    setName('');
  };

  return (

    <div className={styles.App}>
      <input
        value={name}
        type="text"
        onChange={changeInput}
        style={{ marginRight: "1em" }}
      />

      <button onClick={addName} style={{ marginRight: "1em" }}>
        Add Name
      </button>

      <button onClick={removeName} style={{ marginRight: "1em" }}>
        Remove Name
      </button>

      <button onClick={resetList}>
        Reset
      </button>

      <ul>
        {nameList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>


    // Exercise 1:
    // <div className={styles.App}>
    //   <Character name="Sherbert" position="Bartender" company="Ice Factory" salary={69.99} />
    //   <Character name="Lerbert" position="Barista" company="Bowl Company" salary={49.69} />
    // </div>

    // Exercise 3
    // <div className={styles.App}>
    //   {planets.map((planet, index) => {
    //     return (
    //       <h1><Planets name={planet.name} isGasPlanet={planet.isGasPlanet} /></h1>
    //     )
    //   })}
    // </div>

    // Exercise 4:
    /* <input type="text" onChange={changeInput} style={{ marginRight: "1em" }} />
      <button onClick={changeTextAndColor}>Confirm</button>
      <h1 style={{ color: textColor }}>The Color is {displayText}</h1> */
  );
}

// const Character = (props) => {
//   // return (
//   //   // Exercise 1:
//   //   // <div className={styles.personInfo}>
//   //   //   <h1 className={styles.name}>{props.name}</h1>
//   //   //   <p className={styles.position}>{props.position}</p>
//   //   //   <p className={styles.company}>{props.company}</p>
//   //   //   <p className={styles.salary}>{props.salary}</p>    
//   //   //   <br></br>
//   //   // </div>

//   // );
// }

export default App;
