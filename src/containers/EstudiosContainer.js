import React from 'react'
import { Estudio } from '../components/Estudio'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const EstudiosContainer = (props) => {
  const { estudios } = props;
  console.log(estudios);
  let est = (
    <Accordion defaultExpanded={true}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="estudios-content"
        id="estudios-header"
      >
        <Typography>Estudios</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {
          estudios.map(e => {
            return <Estudio
              Nombre={e.Nombre}
              Duracion={e.Duracion}
              Escuela={e.Escuela}
              Redirect={e.Redirect} />
          })
        }
      </AccordionDetails>
    </Accordion>
  );
  return est?est:(<div>
    Estudios
    <div className='contenedor'>
      {estudios.map(e => {
        return <Estudio
          Nombre={e.Nombre}
          Duracion={e.Duracion}
          Escuela={e.Escuela}
          Redirect={e.Redirect} />
      })}
    </div>
  </div>)
}
