import React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'

import './AccordionList.scss'
import '../../../static/styles/font-classes.scss'
import { ReactComponent as ArrowIcon } from './images/arrow.svg'

const accordions = [
  'Loudspeakers',
  'Amplifier',
  'Foh',
  'Backline',
  'Microphone set',
  'DJ equipment',
]

const AccordionList = () => {
  return (
    <ul className='accordion-list'>
      {accordions.map((accordion) => {
        return (
          <li className='accordion-list__item'>
            <Accordion className='accordion-list__accordion'>
              <AccordionSummary expandIcon={<ArrowIcon />}>
                <label className='label2'>{accordion}</label>
              </AccordionSummary>
              <AccordionDetails>
                <ul className='accordion-list__details'>
                  <li className='accordion-list__details-item'>
                    Acoustic system BELL Top 600W x 2
                  </li>
                  <li className='accordion-list__details-item'>
                    Acoustic system BELL Mid 600W x 2
                  </li>
                  <li className='accordion-list__details-item'>
                    Acoustic system BELL Sub 1000W x 2
                  </li>
                  <li className='accordion-list__details-item'>
                    Front monitor Yamaha SM12V 300w x 2
                  </li>
                  <li className='accordion-list__details-item'>
                    Backside monitor Dynacord 500W x 2
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </li>
        )
      })}
    </ul>
  )
}

export default AccordionList
