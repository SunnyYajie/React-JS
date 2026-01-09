import styles from './App.module.css';
import {Planets} from './Planets';



function App() {
  const planets = [
    {name: 'Earth', isGasPlanet: false},
    {name: 'Jupiter', isGasPlanet: true},
    {name: 'Mars', isGasPlanet: false},
    {name: 'Uranus', isGasPlanet: true},
  ];
  return (
    // Exercise 1:
    // <div className={styles.App}>
    //   <Character name="Sherbert" position="Bartender" company="Ice Factory" salary={69.99} />
    //   <Character name="Lerbert" position="Barista" company="Bowl Company" salary={49.69} />
    // </div>

    <div className={styles.App}>
      {planets.map((planet, index) => {
        return (
          <h1><Planets name={planet.name} isGasPlanet={planet.isGasPlanet} /></h1>
        )
      })}
    </div>
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
