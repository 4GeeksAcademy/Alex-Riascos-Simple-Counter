//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
// include your styles into the webpack bundle
import "../styles/index.css";
//import your own components
import Home from "./component/home.jsx";

//render your react application

let intervalID = null;
let counter = 0;

function updateCounter() {
    counter++;
    root.render(<MainComponent />);
}

const MainComponent = () => {
    return (
        <>
            <Home seconds={counter} />

            <div className="p-2 d-flex gap-2">
                <button onClick={() => {
                    if (!intervalID) { // Evita iniciar múltiples intervalos al dar  "click", es decir, no se duplica la velocidad
                        updateCounter(); // inicia el contador inmediatamente depues de hacer click
                        intervalID = setInterval(updateCounter, 1000);
                    }
                }} className="btn btn-success">Start</button>

                <button onClick={() => {
                    clearInterval(intervalID);
                    intervalID = null; // Asegúra limpiar el ID del intervalo
                    // No restablece el contador, solo detén el intervalo
                    root.render(<MainComponent />);
                }} className="btn btn-danger">Stop</button>

                <button onClick={() => {
                    clearInterval(intervalID);
                    intervalID = null; // Limpia el ID del intervalo
                    counter = 0; // Reinicia el contador
                    root.render(<MainComponent />);
                }} className="btn btn-warning">Reset</button>
            </div>
        </>
    );
}

let root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<MainComponent />);