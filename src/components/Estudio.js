import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import icono from '../../public/assets/icono_3_puntos.svg'

export const Estudio = (props) => {
    const {
        Nombre,
        Duracion,
        Escuela,
        Redirect,
    } = props;
    console.log(props)

    return (
        <div className="container">
            <div key={Nombre+ 1}>
                {Nombre}
            </div>
            <div key={Nombre+ 12}>
                {Duracion}
            </div>
            <div key={Nombre+ 13}>
                {Escuela}
            </div>
            <a href={Redirect}>
                <img src={icono}/> 
            </a>
        </div>
    )
}
