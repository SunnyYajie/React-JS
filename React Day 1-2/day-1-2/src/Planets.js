export 

const Planets = (props) => {
    return (
        <div>
            {(props.isGasPlanet) && props.name } 
        </div>
    );
}