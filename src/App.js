import React from 'react';
import { Estudio } from './components/Estudio';
import { EstudiosContainer } from './containers/EstudiosContainer';
import "../public/styles.css"
import MenuContainer from './containers/MenuContainer';

const defaultdata = [{
    Nombre: "Ingenieria Civil Industrial",
    Duracion: "2014 - 2020",
    Escuela: "Universidad Andres Bello",
    Redirect: "url",
}];

export const App = () => {
    return (
    <div>
        <MenuContainer />
        <EstudiosContainer estudios={defaultdata} />
    </div>
    )
}


export default App;