import {React, useContext} from 'react';
import { langueContaint } from './DataLangue';
import './MultiLangue.css';
import {monContexte} from '../Context/LangueContext'

function MultiLangue() {
  const {choiceLangue} = useContext(monContexte)

  return (
      <div className='titreSubtitle'>
        <h1>{langueContaint[choiceLangue].title}</h1>
        <p>{langueContaint[choiceLangue].subtitle}</p>
      </div>
  )
}

export default MultiLangue
