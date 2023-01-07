import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import icono from '../assets/icono_3_puntos.svg'

export const Estudio = (props) => {
    const {
        Nombre,
        Duracion,
        Escuela,
        Redirect,
    } = props;
    console.log(props)

    return (
        <div class="container">
            <div>
                {Nombre}
            </div>
            <div>
                {Duracion}
            </div>
            <div>
                {Escuela}
            </div>
            <a href={Redirect}>
                <img src={icono}/> 
            </a>
        </div>
    )
}
