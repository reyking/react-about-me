import React, { Component } from 'react';
import { Estudio } from './components/Estudio';
import { EstudiosContainer } from './containers/EstudiosContainer';
import "../styles.css"

const defaultdata = [{
    Nombre: "Ingenieria Civil Industrial",
    Duracion: "2014 - 2020",
    Escuela: "Universidad Andres Bello",
    Redirect: "url",
}];

class App extends Component {

    render() {
        return (
            <div>
                <EstudiosContainer estudios={defaultdata}/>
            </div>
        )
    }
}

export default App;