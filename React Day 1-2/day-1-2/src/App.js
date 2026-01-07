import './App.css';

function App() {
  return (
    <div className="App">
      <Character name="Sherbert" position="Bartender" company="Ice Factory" salary={69.99} />
      <Character name="Lerbert" position="Barista" company="Bowl Company" salary={49.69} />
      <Character name="Gerbert" position="Butcher" company="Kindergarten" salary={500000000.6999} />
      <Character name="Berbert" position="Boxer" company="Brief Ring and Cartons Inc." salary={4} />
    </div>
  );
}

const Character = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.position}</p>
      <p>{props.company}</p>
      <p>{props.salary}</p>    
      <br></br>
    </div>

  );
}

export default App;
